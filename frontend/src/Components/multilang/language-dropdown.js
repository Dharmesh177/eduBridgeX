const Languageoption = (props) => {
    return(
        <div >
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'gj'}>Gujarati</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
    )
}
export default Languageoption;