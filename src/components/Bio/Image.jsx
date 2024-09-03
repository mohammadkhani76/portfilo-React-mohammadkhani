const Image = ({ bioimage }) => {
    return (
        <div className="bio__img">
            <img src={bioimage} alt="image" />
        </div>
    );
}
export default Image;
