import React, { ReactNode, Dispatch, SetStateAction } from 'react'

export type BookType = {
  id: string
  title: string
  authors: string
  published_at: number | null
  description: string,
  image_url: string | null
}

export type GlobalContextType = {
  isLoaderVisible: boolean
  setIsLoaderVisible: Dispatch<SetStateAction<boolean>>
  books: BookType[]
  setBooks: Dispatch<SetStateAction<BookType[]>>
  myFavorites: BookType[]
  setMyFavorites: Dispatch<SetStateAction<BookType[]>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  current_page: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  total_page: number
  setTotalPage: Dispatch<SetStateAction<number>>
}

export type GlobalPropsType = {
  children?: ReactNode
}
