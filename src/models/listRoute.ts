import {ReactElement, ReactNode} from "react"

export interface ListA {
  path: string
  title: string
  icon: React.ForwardRefExoticComponent<any>
  child: []
}
