import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
      <label className='filter'>
        <input type="checkbox" className="filter__invisible-checkbox"></input>
        <span className="filter__visible-checkbox"></span>
        <span className='filter__text-checkbox'>Короткометражки</span>
      </label>
  )
}