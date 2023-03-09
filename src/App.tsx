import { useCallback, useEffect, useState } from 'react'
import Card from './components/card'
import Modal from './components/modal'
import './App.css'
import mockdata from './assets/mockdata'
import { ItemData } from './type/item'

function App() {
  const [nftList, setNftList] = useState<ItemData[]>([])
  const [activeNode, setActiveNode] = useState<ItemData | null>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    setNftList(mockdata)
  }
  const handleCardClick = useCallback((node: ItemData) => {
    setActiveNode(node)
    setModalVisible(true)
  }, [])

  return (
    <>
      <div className="card-list">
        {nftList.map(item => 
          <Card data={item} key={item.id} onClick={() => handleCardClick(item)} />
        )}
      </div>
      <Modal
        visible={modalVisible}
        data={activeNode}
        handleClose={() => setModalVisible(false)}
      />
    </>
  )
}

export default App
