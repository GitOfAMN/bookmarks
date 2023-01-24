import styles from './CreateBookmark.module.scss'

export default function createBookmark({
    createBookmark,
    bookmark,
    handleChange
}) {
    return (
        <>
            <h2>Create A Bookmark</h2>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={() => {
                    e.preventDefault()
                    createBookmark()
                }}>
                    <div>
                    <label>Title<input type="text" value={bookmark.title} name="title" onChange={handleChange} placeholder={'Title'} /></label>
                    <label>URL<input type="text" value={bookmark.url} name="url" onChange={handleChange} placeholder={'URL'} /></label>
                    </div>
                    <input className={styles.button} type="submit" value="Create Bookmark" />
                </form>
            </div>

        </>
    )
}