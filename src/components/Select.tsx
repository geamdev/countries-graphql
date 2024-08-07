import { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';

interface SelectType {
  list: string[];
  selectedItems: string[];
  selectItems: (items: string[]) => void;
  onblur: () => void;
  onFocus: () => void;
  placeholder?: string;
  loading: boolean;
  onLoading: JSX.Element;
}

const Select = ({ list, selectedItems, placeholder, selectItems, onblur, onFocus, loading, onLoading }: SelectType) => {
  const [inputItems, setInputItems] = useState(list);
  const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) {
        return;
      }
      const index = selectedItems.indexOf(selectedItem);
      if (index > 0) {
        selectItems([...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)]);
      } else if (index === 0) {
        selectItems([...selectedItems.slice(1)]);
      } else {
        selectItems([...selectedItems, selectedItem]);
      }
    },
    selectedItem: null,
    stateReducer: (state: any, actionAndChanges: any) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
            highlightedIndex: state.highlightedIndex,
            inputValue: ''
          };
        case useCombobox.stateChangeTypes.InputBlur:
          onblur();
          return {
            ...changes,
            inputValue: ''
          };
        default:
          return changes;
      }
    },
    onInputValueChange: ({ inputValue }) => {
      if (!inputValue) {
        setInputItems(list);
      } else {
        setInputItems(list.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
      }
    }
  });
  const placeholderText = selectedItems?.length
    ? `${selectedItems?.length} ${placeholder?.toLocaleLowerCase() ?? 'elements'} selected`
    : placeholder ?? 'Elements';

  useEffect(() => {
    if (list.length > 0) {
      setInputItems([...list]);
    }
  }, [list]);

  return (
    <div className="relative" onFocus={onFocus} role="select-container">
      <div
        {...getComboboxProps()}
        className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
        role="select"
      >
        <input placeholder={placeholderText} {...getInputProps()} className="flex-1 focus:outline-none" />
        <button
          role="button"
          type="button"
          {...getToggleButtonProps()}
          className="flex items-center justify-center text-gray-800 focus:outline-none"
        >
          &#8595;
        </button>
      </div>
      <ul
        {...getMenuProps()}
        className={`max-h-80 max-width-300 border-2 rounded-lg overflow-y-scroll p-0.5 absolute z-10 bg-white w-full${
          !isOpen ? ' hidden' : ''
        }`}
      >
        {isOpen && !loading && inputItems.length < 1 && <p className="text-center text-gray-800">No results found</p>}

        {loading && <div className="w-full h-full flex items-center justify-center">{onLoading}</div>}

        {!loading &&
          inputItems.length > 0 &&
          isOpen &&
          inputItems.map((item, index) => (
            <li
              key={index}
              {...getItemProps({
                item,
                index
              })}
              role="option"
              className="hover:bg-indigo-100 cursor-pointer p-1 flex items-center gap-2"
            >
              <input type="checkbox" checked={selectedItems.includes(item)} value={item} onChange={() => null} />

              <p className="text-gray-600 text-sm">{item}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
