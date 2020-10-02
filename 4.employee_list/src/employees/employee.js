import React from 'react';

function Employee(props) {
    return (
      <tr key={props.item.id}>
          <td><img src={props.item.avatar} alt="" /></td>
          <td>
              <a href="#" onClick={ () => props.handleClick(props.item)} data-id="{props.item.id}">
                  {`${props.item.first_name} ${props.item.last_name}`}
              </a>
          </td>
          <td>
              {`${props.item.email}`}
          </td>
      </tr>
    );
}

export default Employee;
