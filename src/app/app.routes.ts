import { Routes } from '@angular/router';   

import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/control-flow/ifelse/ifelse.component';
import { SwitchComponent } from './components/control-flow/switch/switch.component';
import { ForComponent } from './components/control-flow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { RectiveComponent } from './components/forms/rective/rective.component';

export const routes: Routes = [
    // {
    //     path: 'add-emp',
    //     component: AddEmployeeComponent,
    // },

    // {
    //     path: 'data-binding',
    //     component: DataBindingComponent,
    // },

    // {
    //     path: 'emp-list',
    //     component: EmployeeListComponent,
    // },

    // {
    //     path: 'structural-dir',
    //     component: StructuralDirectiveComponent,
    // },
    
    // {
    //     path: 'attribute-directive',
    //     component: AttributeDirectiveComponent,
    // },

    {
        path: 'ifelse',
        component: IfelseComponent,
    }, 

    {
        path: 'for',
        component: ForComponent,
    },

    {
        path: 'switch',
        component: SwitchComponent,
    },

    {
        path: 'pipe',
        component: PipeComponent,
    },

    {
        path:'forms',
        component: TemplateComponent
    },

    {
        path: 'rForm',
        component: RectiveComponent
    },

    

    

    

];
