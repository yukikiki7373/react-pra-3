const CantFindGitUser = (props) =>{
    return(
        <>
            <p>検索したユーザー：{props.username}</p>
            <p>検索したユーザーは見つかりませんでした。</p>
        </>
    )
}

export default CantFindGitUser;