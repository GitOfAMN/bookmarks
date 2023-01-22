export default function createBookmark({
    createBookmark,
    bookmark,
    handleChange
}) {
    return (
        <>
            <h2>Create A Bookmark</h2>
            <form onSubmit={() => {
                e.preventDefault()
                createBookmark()
            }}>
                <input type="text" value={bookmark.title} name="title" onChange={handleChange} placeholder={'Title'}></input>
                <input type="text" value={bookmark.url} name="url" onChange={handleChange} placeholder={'URL'}></input>
                <input type="submit" value="Create Bookmark" />
            </form>
        </>
    )
}