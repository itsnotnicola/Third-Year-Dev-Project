import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, Show, SimpleShowLayout } from 'react-admin';

export const Select_courseList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Course_Coordinator" />
            <TextField source="Course_Name" />
            <NumberField source="Credits" />
            <NumberField source="Years" />
        </Datagrid>
    </List>
);

export const Select_courseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Course_Coordinator" />
            <TextField source="Course_Name" />
            <NumberField source="Credits" />
            <DateField source="updated" />
            <NumberField source="Years" />
        </SimpleShowLayout>
    </Show>
);