import { useRef, useState } from "react";
import { FlexibleButton } from "../../styled";

const UploadImg = () => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);

    console.log(file)

    return (
        <>
            <input
                type="file"
                hidden={true}
                ref={ref}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                name="file"
            />
            <FlexibleButton
                type="button"
                backgroundColor="#2e6cd1"
                color="white"
                width="23.8%"
                height="30px"
                borderRadius="1px"
                onClick={() => ref.current?.click()}
            >
                Upload Img
            </FlexibleButton>
        </>
    );
};

export default UploadImg;



