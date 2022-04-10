import OnEvent from 'react-onevent';
import '../student.css';

export default class Student extends Component {

    constructor(props){
            super(props);
            this.state={
                on:false,
                PlusButton:true,
                MinusButton:false,
                tagInput:'',
                tag:[]
            }
    }