import { FC } from 'react'
import s from './styles.module.css'
import Image from 'next/image'
import { Heading } from '@/components/ui'

interface Props {
  className?: string
}

export const Delivery: FC<Props> = ({ className }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.grid}>
            <div className={s.content}>
              <Heading className={s.title} level={'h2'}>
                Доставка по всей стране
              </Heading>
              <div className={s.description}>
                <p>
                  Мы рады предложить вам качественные и свежие овощи и фрукты прямо с ферм Северного Кавказа, и лучшее в
                  этом - мы доставим их в любой уголок нашей страны!
                </p>
                <p>
                  Компания ОптРынок работает напрямую с надежными производителями, что позволяет нам обеспечить быструю
                  и эффективную доставку. Будь вы в Москве, Сибири или за Уралом, мы гарантируем, что наши овощи и
                  фрукты будут доставлены вам в самом лучшем виде.
                </p>
              </div>
            </div>
            <div className={s.illustration}>
              <Image
                alt={'Доставка яблок по всей стране'}
                className={s.bg}
                height={1000}
                width={1000}
                src={'/images/truck-in-map-2.png'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
