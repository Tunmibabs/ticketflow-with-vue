<template>
  <DashboardLayout>
    <div class="p-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-slate-100">Tickets</h1>
        <button
          @click="toggleForm"
          class="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          {{ showForm ? 'Cancel' : '+ New Ticket' }}
        </button>
      </div>

      <div v-if="showForm" class="mb-8">
        <TicketForm
          :initial-data="editingTicket"
          @submit="editingTicket ? handleUpdateTicket : handleAddTicket"
          @cancel="cancelForm"
        />
      </div>

      <div class="mb-6">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search tickets..."
          class="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div class="bg-slate-900 rounded-lg overflow-hidden">
        <table class="w-full">
          <thead>
            <tr class="border-b border-slate-700 bg-slate-800">
              <th class="px-6 py-3 text-left text-sm font-semibold text-slate-300">Title</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-slate-300">Description</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in filteredTickets" :key="ticket.id" class="border-b border-slate-700 hover:bg-slate-800">
              <td class="px-6 py-4 text-slate-100">{{ ticket.title }}</td>
              <td class="px-6 py-4 text-slate-300 truncate">{{ ticket.description }}</td>
              <td class="px-6 py-4">
                <span :class="['px-3 py-1 rounded-full text-xs font-medium', getStatusColor(ticket.status)]">
                  {{ ticket.status }}
                </span>
              </td>
              <td class="px-6 py-4 flex gap-2">
                <button
                  @click="startEdit(ticket)"
                  class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  @click="openDeleteConfirm(ticket.id)"
                  class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="filteredTickets.length === 0" class="text-center py-12">
        <p class="text-slate-400">No tickets found</p>
      </div>

      <DeleteConfirmationDialog
        :is-open="deleteConfirm.isOpen"
        :is-loading="isDeleting"
        @confirm="handleConfirmDelete"
        @cancel="closeDeleteConfirm"
      />
    </div>
  </DashboardLayout>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import { useToast } from '../composables/useToast'
import { useErrorHandler } from '../composables/useErrorHandler'
import DashboardLayout from '../components/DashboardLayout.vue'
import TicketForm from '../components/TicketForm.vue'
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog.vue'

const tickets = ref([])
const searchTerm = ref('')
const showForm = ref(false)
const editingTicket = ref(null)
const isDeleting = ref(false)
const deleteConfirm = ref({ isOpen: false, ticketId: '' })
const currentUser = ref({})

const { addToast } = useToast()
const { handleError, handleSessionExpired } = useErrorHandler()

onMounted(() => {
  const user = localStorage.getItem('currentUser')
  if (!user) {
    handleSessionExpired()
    return
  }
  currentUser.value = JSON.parse(user)

  const allTickets = JSON.parse(localStorage.getItem('tickets') || '[]')
  tickets.value = allTickets.filter((t) => t.userId === currentUser.value.id)
})

const filteredTickets = computed(() =>
  tickets.value.filter(
    t =>
      t.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)

const getStatusColor = (status) => {
  switch (status) {
    case 'open':
      return 'bg-green-900 text-green-200'
    case 'in-progress':
      return 'bg-amber-900 text-amber-200'
    case 'closed':
      return 'bg-slate-700 text-slate-200'
    default:
      return 'bg-slate-700 text-slate-200'
  }
}

const toggleForm = () => {
  showForm.value = !showForm.value
  if (!showForm.value) {
    editingTicket.value = null
  }
}

const cancelForm = () => {
  showForm.value = false
  editingTicket.value = null
}

const startEdit = (ticket) => {
  editingTicket.value = ticket
  showForm.value = true
}

const handleAddTicket = (ticketData) => {
  try {
    const newTicket = {
      ...ticketData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      userId: currentUser.value.id
    }

    const allTickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    allTickets.push(newTicket)
    localStorage.setItem('tickets', JSON.stringify(allTickets))

    tickets.value.push(newTicket)
    cancelForm()
    addToast('Ticket created successfully', 'success')
  } catch (error) {
    handleError(error, { showToast: true })
  }
}

const handleUpdateTicket = (ticketData) => {
  try {
    if (!editingTicket.value) return

    const updatedTicket = {
      ...editingTicket.value,
      ...ticketData
    }

    const allTickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    const index = allTickets.findIndex((t) => t.id === editingTicket.value.id)

    if (index === -1) throw new Error('Ticket not found')

    allTickets[index] = updatedTicket
    localStorage.setItem('tickets', JSON.stringify(allTickets))

    const ticketIndex = tickets.value.findIndex(t => t.id === editingTicket.value.id)
    if (ticketIndex !== -1) {
      tickets.value[ticketIndex] = updatedTicket
    }

    cancelForm()
    addToast('Ticket updated successfully', 'success')
  } catch (error) {
    handleError(error, { showToast: true })
  }
}

const openDeleteConfirm = (ticketId) => {
  deleteConfirm.value = { isOpen: true, ticketId }
}

const closeDeleteConfirm = () => {
  deleteConfirm.value = { isOpen: false, ticketId: '' }
}

const handleConfirmDelete = async () => {
  if (!deleteConfirm.value.ticketId) return

  isDeleting.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 500))

    const allTickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    const filtered = allTickets.filter((t) => t.id !== deleteConfirm.value.ticketId)
    localStorage.setItem('tickets', JSON.stringify(filtered))

    tickets.value = tickets.value.filter(t => t.id !== deleteConfirm.value.ticketId)
    closeDeleteConfirm()
    addToast('Ticket deleted successfully', 'success')
  } catch (error) {
    handleError(error, { showToast: true })
  } finally {
    isDeleting.value = false
  }
}
</script>
