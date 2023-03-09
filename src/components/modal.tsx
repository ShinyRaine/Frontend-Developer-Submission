import { ReactHTMLElement, useCallback, useEffect, useRef, useState } from 'react'
import { ItemData } from '../type/item'
import './modal.css'
import closeIcon from '../assets/close_icon.svg'

interface propsType {
  data: ItemData | null;
  visible: boolean;
  handleClose: () => void
}

const Modal = (props: propsType) => {
  const { data, visible, handleClose } = props
  const modalElement = useRef<HTMLDivElement>(null)
  const maskElement = useRef<HTMLDivElement>(null)
  const topRef = useRef(0)

  useEffect(() => {
    if(!modalElement.current) return
    if(!maskElement.current) return
    if(visible) {
      const top = document.documentElement.scrollTop
      topRef.current = top
      document.body.classList.add('fixed-body')
      document.body.style.top = `-${top}px`
      modalElement.current.style.display = 'block'
      modalElement.current.style.top = `${top + 100}px`
      maskElement.current.style.display = 'block'
      maskElement.current.style.top = `${top}px`
    } else {
      document.body.classList.remove('fixed-body')
      modalElement.current.style.display = 'none'
      maskElement.current.style.display = 'none'
      document.documentElement.scrollTop = topRef.current

    }
  }, [visible])

  const handleClickBuyButton = useCallback(() => {
    if(!data) return
    window.open(`https://opensea.io/assets/ethereum/${data.assetAddress}/${data.tokenId}`, 'tab')
  }, [data])

  if(!data) return <></>

  return (
    <div className='modal-container'>
      <div className='mask' ref={maskElement} onClick={handleClose}></div>
      <div className='modal-content' ref={modalElement}>
        <div className='modal-title'>
          {data.name}
          <img onClick={handleClose} src={closeIcon} />
        </div>
        <div className='owner'>
          Owned by 
          <span className='owner-name'>{data.owner.name}</span>
        </div>
        <img className='main-image' src={data.image} />
        <div className='desc'>{data.description}</div>
        <div className='time'>Sale ends {data.closedAt}</div>
        <div className='button-container'>
          <button onClick={handleClickBuyButton}>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
