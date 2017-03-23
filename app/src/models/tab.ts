import { EventEmitter } from '@angular/core'
import { BaseTabComponent } from 'components/baseTab'
import { Session } from 'services/sessions'

export declare type ComponentType<T extends Tab> = new (...args: any[]) => BaseTabComponent<T>

export class Tab {
    id: number
    title: string
    scrollable: boolean
    hasActivity = false
    focused = new EventEmitter<any>()
    blurred = new EventEmitter<any>()
    static lastTabID = 0

    constructor () {
        this.id = Tab.lastTabID++
    }

    displayActivity () {
        this.hasActivity = true
    }

    getComponentType (): ComponentType<Tab> {
        return null
    }
}


import { TerminalTabComponent } from 'components/terminalTab'

export class TerminalTab extends Tab {
    constructor (public session: Session) {
        super()
    }

    getComponentType (): ComponentType<TerminalTab> {
        return TerminalTabComponent
    }
}
