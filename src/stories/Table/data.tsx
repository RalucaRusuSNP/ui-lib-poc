import { ColumnDef } from "@tanstack/react-table";

import type { Notification } from "@/types/notification";
import TableHeadSorting from '@/components/molecules/TableHeadSorting';

export const notificationTableData: Notification[] = [
  {
    id: "123",
    priority: "High",
    patient: {
      name: "Russell Owen",
      id: "P001"
    },
    event: "HR above 158 BPM for over 5 min",
    dateTime: {
      start: "07/06 16:36",
      end: "16:41"
    },
    closureReason: "Expired",
    notificationCount: 4,
    observations: {
      id: "871135BG478",
      bodyTemperature: 37.4,
      spO2: 95
    },
    medicalConditions: [
      {
        condition: "Sepsis",
        date: "07/11/2023"
      },
      {
        condition: "COPD",
        date: "07/10/2023"
      }
    ],
    medications: [
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      },
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      }
    ]
  },
  {
    id: "234",
    priority: "Medium",
    patient: {
      name: "Amala Rogers",
      id: "P001"
    },
    event: "RR Baseline deviation of 37% for over 2 hours",
    dateTime: {
      start: "07/06 14:35",
      end: "16:35"
    },
    closureReason: "Acknowledged by John Adams",
    notificationCount: 4,
    observations: {
      id: "871135BG478",
      bodyTemperature: 37.4,
      spO2: 95
    },
    medicalConditions: [
      {
        condition: "Sepsis",
        date: "07/11/2023"
      },
      {
        condition: "COPD",
        date: "07/10/2023"
      }
    ],
    notification: {
      title: 'Notification message',
      metric: 90,
      label: 'm',
      time: '14:00'
    }
  },
  {
    id: "345",
    priority: "Low",
    patient: {
      name: "Sam Owen",
      id: "P001"
    },
    event: "HR Baseline deviation of 47% for over 4 hours",
    dateTime: {
      start: "07/06 23:36",
      end: "07/07 01:36"
    },
    closureReason: "Acknowledged by John Adams",
    notificationCount: 4,
    observations: {
      id: "871135BG478",
      bodyTemperature: 37.4,
      spO2: 95
    },
    medicalConditions: [
      {
        condition: "Sepsis",
        date: "07/11/2023"
      },
      {
        condition: "COPD",
        date: "07/10/2023"
      }
    ],
    medications: [
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      },
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      }
    ],
    notification: {
      title: 'Notification message',
      metric: 90,
      label: 'm',
      time: '14:00'
    }
  },
  {
    id: "4556",
    priority: "High",
    patient: {
      name: "Russell Rogers",
      id: "P001"
    },
    event: "HR Baseline deviation of 47% for over 4 hours",
    dateTime: {
      start: "07/06 11:03",
      end: "15:07"
    },
    closureReason: "Acknowledged by John Adams",
    notificationCount: 4,
    notification: {
      title: 'Notification message',
      metric: 90,
      label: 'm',
      time: '14:00'
    }
  },
  {
    id: "567",
    priority: "High",
    patient: {
      name: "Tom Castillo",
      id: "P001"
    },
    event: "Bed Exit",
    dateTime: {
      start: "07/06 09:36",
      end: "09:51"
    },
    closureReason: "Acknowledged by John Adams",
    notificationCount: 4,
    observations: {
      id: "871135BG478",
      bodyTemperature: 37.4,
      spO2: 95
    },
    medicalConditions: [
      {
        condition: "Sepsis",
        date: "07/11/2023"
      },
      {
        condition: "COPD",
        date: "07/10/2023"
      }
    ],
    medications: [
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      },
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      }
    ]
  },
  {
    id: "678",
    priority: "Medium",
    patient: {
      name: "Russell Owen",
      id: "P001"
    },
    event: "HR Baseline deviation of 47% for over 4 hours",
    dateTime: {
      start: "07/06 16:36",
      end: "16:41"
    },
    closureReason: "Acknowledged by John Adams",
    notificationCount: 4,
    observations: {
      id: "871135BG478",
      bodyTemperature: 37.4,
      spO2: 95
    },
    medicalConditions: [
      {
        condition: "Sepsis",
        date: "07/11/2023"
      },
      {
        condition: "COPD",
        date: "07/10/2023"
      }
    ],
    medications: [
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      },
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      }
    ]
  },
  {
    id: "789",
    priority: "Medium",
    patient: {
      name: "Amala Owen",
      id: "P001"
    },
    event: "Position change is required",
    dateTime: {
      start: "07/06 16:36",
      end: "16:41"
    },
    closureReason: "Acknowledged by John Adams",
    notificationCount: 4,
    observations: {
      id: "871135BG478",
      bodyTemperature: 37.4,
      spO2: 95
    },
    medicalConditions: [
      {
        condition: "Sepsis",
        date: "07/11/2023"
      },
      {
        condition: "COPD",
        date: "07/10/2023"
      }
    ],
    medications: [
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      },
      {
        name: "Lisinopril: 10 mg once daily",
        date: "07/11/2023"
      }
    ]
  },
];

export const notificationColumns: ColumnDef<Notification>[] = [
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <TableHeadSorting column={column}>
          Priority
        </TableHeadSorting>
      )
    },
    sortingFn: (rowA, rowB) => {
      const priorityA: Notification["priority"]  = rowA.getValue("priority");
      const priorityB: Notification["priority"] = rowB.getValue("priority");

      switch (true) {
        case priorityA === priorityB:
          return 0;
        case priorityA === 'Low':
        case priorityA === 'Medium' && priorityB === 'High':
          return -1;
        case priorityA === 'High':
        case priorityA === 'Medium' && priorityB === 'Low':
          return 1;
        default:
          return 0;
      }
    },
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string
      return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${priority === 'High' ? 'bg-red-100 text-red-800' : 
            priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-gray-100 text-gray-800'}`}>
          {priority}
        </div>
      )
    },
  },
  {
    accessorKey: "patient",
    header: ({ column }) => {
      return (
        <TableHeadSorting column={column}>
          Patient
        </TableHeadSorting>
      )
    },
    sortingFn: (rowA, rowB) => {
      const patientA: Notification["patient"]  = rowA.getValue("patient");
      const patientB: Notification["patient"] = rowB.getValue("patient");

      return patientA.name < patientB.name ? -1 : 1;
    },
    cell: ({ row }) => {
      const patient = row.getValue("patient") as Notification["patient"]
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            {patient.name.charAt(0)}
          </div>
          <span>{patient.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "event",
    header: ({ column }) => {
      return (
        <TableHeadSorting column={column}>
          Event
        </TableHeadSorting>
      )
    },
  },
  {
    accessorKey: "dateTime",
    header: "Date & Time",
    cell: ({ row }) => {
      const dateTime = row.getValue("dateTime") as Notification["dateTime"]
      return `${dateTime.start} - ${dateTime.end}`
    },
  },
  {
    accessorKey: "closureReason",
    header: "Closure reason",
    cell: ({ row }) => {
      const reason = row.getValue("closureReason") as string
      const acknowledgedBy = row.original.acknowledgedBy
      return (
        <div>
          <div>{reason}</div>
          {acknowledgedBy && (
            <div className="text-sm text-gray-500">
              by {acknowledgedBy}
            </div>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "notificationCount",
    header: "Notifications",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-between">
          <span>{row.getValue("notificationCount")}</span>
        </div>
      )
    },
  }
];
