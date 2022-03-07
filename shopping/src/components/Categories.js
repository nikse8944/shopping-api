import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container =styled.div`
display: flex;
padding: 20px;
${mobile({ padding: "0px", flexDirection:"column" })}
`


const Categories = () => {
    return (
        <div>
            <Container>
               {categories.map(item=>(
                   <CategoryItem item={item} key={item.id}/>

               ))}

            </Container>
        </div>
    );
}

export default Categories;

