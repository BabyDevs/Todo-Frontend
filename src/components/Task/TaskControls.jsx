import { useId } from 'react'
import Dropdown from '../UI/Dropdown'
import css from './TaskControls.module.scss'

const Group = ({ name, label }) => {
  const Id = useId()

  return (
    <div className={css.inputGroup}>
      <input type="radio" name={name} id={Id} value={label} />
      <label htmlFor={Id}>{label}</label>
    </div>
  )
}

const TaskControls = ({ setShowTaskCategory, setSoryBy, taskCount = 10 }) => {
  const handleCategoryFormSubmit = ({ currentTarget }) => {
    const value = currentTarget.elements.category.value
    setShowTaskCategory(value)
  }
  const handleSortFormSubmit = ({ currentTarget }) => {
    const value = currentTarget.elements.sort.value
    setSoryBy(value)
  }

  return (
    <div className={css.TaskControls}>
      <p className={css.taskCount}>
        <span>{taskCount}</span> tasks found
      </p>

      <div className={css.controls}>
        <Dropdown
          title="Category"
          align="right"
          className={css.dropdown}
          onChange={handleCategoryFormSubmit}
        >
          <Group name="category" label="Personal" />
          <Group name="category" label="School" />
          <Group name="category" label="Work" />
        </Dropdown>

        <Dropdown
          title="Sort By"
          align="right"
          className={css.dropdown}
          onChange={handleSortFormSubmit}
        >
          <Group name="sort" label="Accending" />
          <Group name="sort" label="Deccending" />
        </Dropdown>
      </div>
    </div>
  )
}

export default TaskControls