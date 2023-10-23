import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import styled from '@emotion/styled'
import itemMetadata from '../types/itemMetadata'

const ImageTitle = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ItemCard({item}: itemMetadata[]) {
    return (
        <div className="card">
            <Link href={`/item/${item.id}`}>
                <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="rounded shadow object-cover h-96 w-full"
                    loading={"lazy"}
                />
            </Link>
            <ImageTitle>
                <h2 className="text-lg">{item.name}</h2>
                <p className="mb-2">{item.brand}</p>
                {/*<p>${item.metadata.price}</p>*/}
            </ImageTitle>
        </div>
    )
}