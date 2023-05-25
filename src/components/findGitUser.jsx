const FindGitUser = (props) =>{
    return(
        <>
            <p>検索したユーザー名：{props.username}</p>
            {props.gname === null ? <p>Github上の名前：名前が見つかりませんでした</p> : <p>Github上の名前：{props.gname}</p>}
        </>
    )
}

export default FindGitUser;