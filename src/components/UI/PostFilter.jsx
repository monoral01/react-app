import React from 'react';
import { MySelect } from './select/MySelect';
import { MyInput } from './input/MyInput';
export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By Name' },
          { value: 'body', name: 'By Description' },
        ]}
      />
    </div>
  );
};
