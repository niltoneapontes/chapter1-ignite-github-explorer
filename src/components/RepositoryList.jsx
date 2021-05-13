import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository="unform" description="Forms simplificados em ReactJS" link="#"/>
        <RepositoryItem repository="unform2" description="Forms simplificados em ReactJS" link="#"/>
        <RepositoryItem repository="unform3" description="Forms simplificados em ReactJS" link="#"/>
        <RepositoryItem repository="unform4" description="Forms simplificados em ReactJS" link="#"/>
      </ul>
    </section>
  )
}