import Title from '../Widgets/Title'
import BasicCard from '../Widgets/BasicCard'
import htmlIcon from 'icons/html5.png'
import cssIcon from 'icons/css.png'
import javascriptIcon from 'icons/Javascript.png'
import reactIcon from 'icons/react.png'
import reactNativeIcon from 'Icons/reactNative.png'
import csharpIcon from 'Icons/csharp.png'
import tailwindIcon from 'icons/tailwind.png'
import aspIcon from 'icons/asp.png'
import sqlSrverIcon from 'icons/Sqlserver.png'
import mysqlIcon from 'icons/mysql.png'
import { useState } from 'react'
import FilterButton from 'components/Widgets/FilterButton'
import CancelButton from 'components/Widgets/CancelButton'

const cardData = [
  {
    icon: htmlIcon,
    title: 'HTML5',
    paragraph:
      'Markup language used for structuring and presenting content on the web',
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    types: ['Web','Languages']
  },
  {
    icon: cssIcon,
    title: 'CSS',
    paragraph:
      'Stylesheet language used to describe the presentation of a document written in HTML or XML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    types: ['Web', 'Languages']
  },
  {
    icon: tailwindIcon,
    title: 'Tailwind CSS',
    paragraph:
      'Utility-first CSS framework for rapidly building modern websites without ever leaving your HTML',
    url: 'https://v2.tailwindcss.com/docs',
    types: ['Web']
  },
  {
    icon: javascriptIcon,
    title: 'Javascript',
    paragraph:
      'Lightweight, interpreted, or just-in-time compiled programming language with first-class functions',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    types: ['Web', 'Languages']
  },
  {
    icon: reactIcon,
    title: 'React',
    paragraph:
      'React lets you build user interfaces out of individual pieces called components',
    url: 'https://react.dev/',
    types: ['Web']
  },
  {
    icon: reactNativeIcon,
    title: 'React Native',
    paragraph:
      'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces',
    url: 'https://reactnative.dev/',
    types: ['Mobile']
  },
  {
    icon: csharpIcon,
    title: 'C#',
    paragraph:
      'C-sharp is a strongly typed, object-oriented language developed by Microsoft',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    types: ['Languages','Web']
  },
  {
    icon: aspIcon,
    title: 'ASP.NET Core',
    paragraph:
      'Cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps',
    url: 'https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0',
    types: ['Web']
  },
  {
    icon: sqlSrverIcon,
    title: 'SQL-Server',
    paragraph: 'Relational database management system developed by Microsoft',
    url: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
    types: ['Database']
  },
  {
    icon: mysqlIcon,
    title: 'MySQL',
    paragraph: 'Open-source relational database management system',
    url: 'https://www.mysql.com',
    types: ['Database']
  }
]

const availableFilters = [...new Set(cardData.flatMap((card) => card.types))];

const SkillSection = () => {

  const [filters, setFilters] = useState<string[]>(['Languages'])

  const toggleFilter = (filterValue: string) => {
    const updatedFilters = filters.includes(filterValue)
      ? filters.filter((filter) => filter !== filterValue)
      : [...filters, filterValue];
  
    setFilters(updatedFilters);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <Title title={'My Skills'} />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The following technologies were utilized in the development of the
            projects I have built the past two years
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row flex-wrap md:mx-28">
            {availableFilters.map((type, index) => {
              return (
                <FilterButton
                  key={index}
                  title={type}
                  onClick={() => toggleFilter(type)}
                  checked={filters.includes(type)}
                />
              )
            })}
          </div>
        </div>
        <div className='mr-32 md:mr-24 lg:mr-20 xl:mr-28 2xl:mr-36'>
        <CancelButton title="Cancel filters" onClick={() =>  setFilters([])} />
        </div>
        <div className="flex flex-wrap text-center gap-8 justify-center">
          {cardData
            .filter(
              (card) =>
                card.types?.some((type) => filters.includes(type))
            )
            .map((card, index) => {
              return (
                <BasicCard
                  key={index}
                  image={card.icon}
                  title={card.title}
                  paragraph={card.paragraph}
                  url={card.url}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
