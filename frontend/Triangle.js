import React from 'react'

const Triangle = props => {
  const { reverse, bgColor } = props
  const style={
    width:"0",
    height:"0",
    borderStyle:"solid",
  }
  const width = 10
  const height= width * 2
  if(reverse){
    style.borderWidth = `${width}px 0 ${width}px ${height}px `
    style.borderColor = `transparent transparent transparent ${bgColor}`
  }else{
    style.borderWidth = `${width}px ${height}px ${width}px 0`
    style.borderColor = `transparent ${bgColor} transparent transparent`
  }
  return <div style={style}></div>
}

export default Triangle
