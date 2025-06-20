'use client'
import { ButtonControl } from '@/components/ui'
import s from './styles.module.css'
import { FC, useState } from 'react'

interface Props {
  className?: string
  onClick: (value: string) => void
}

const buttons = [
  { id: 'all', name: 'Весь каталог' },
  { id: 'vegetables', name: 'Овощи' },
  { id: 'fruits', name: 'Фрукты' }
]

export const Filter: FC<Props> = ({ className, onClick }) => {
  const [activeClass, setActiveClass] = useState('all')

  const handleClickButton = (id: string) => {
    setActiveClass(id)
    onClick(id)
  }

  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      {buttons.map(item => (
        <ButtonControl
          id={item.id}
          key={item.id}
          isActive={activeClass === item.id}
          onClick={() => handleClickButton(item.id)}
        >
          {item.name}
        </ButtonControl>
      ))}
    </div>
  )
}
