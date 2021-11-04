export interface Todo {
	text: string
	list: List
	starred: boolean
	checked: boolean
	selected: boolean
}

export enum List {
	Inbox
}

export interface Todos {
	todos: Todo[]
}
