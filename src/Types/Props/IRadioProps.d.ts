declare namespace IRadio {
  interface IProps {
    className?: string;
    onChange?: (e?:any)=> any;
    options: IOption[];
    name: string;
    selectedId: string;
  }

  interface IOption {
      id: string;
    label: string;
    value: any;
    defaultChecked?: boolean;
    diabled?: boolean;
  }

}
