import { Select } from "@headlessui/react";



const ManageUsersTable = ({userData,handleUpdateUserRole}) => {
    const {name,email,role} = userData || {};

    
    return (
        <tr className="border-t">
            <td className="py-3 px-4">{name}</td>
            <td className="py-3 px-4">{email}</td>
            <td className="py-3 px-4">{role}</td>
            <td className="py-3 px-4">
                <Select name="status"defaultValue="Select Role" onChange={(e) => handleUpdateUserRole(e.target.value,email)}>
                    <option value="user">user</option>
                    <option value="moderator">moderator</option>
                    <option value="admin">admin</option>

                </Select>
            </td>

        </tr>
    );
};

export default ManageUsersTable;