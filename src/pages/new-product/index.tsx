import { z } from "zod"
import UploadImg from "../../components/upload-img"
import { Row, FlexibleInput, FlexibleButton, FlexibleTextArea } from "../../styled"
import { ProductSchema } from "../main-page/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Error from "../../components/error/Error"

type productSchema = z.infer<typeof ProductSchema>

const NewProduct = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<productSchema>({
        resolver: zodResolver(ProductSchema)
    })

    const onSumit = () => {
        return ''
    }

    return (
        <form onSubmit={handleSubmit(onSumit)}>
            <Row position='center' gap="10px" direction="column" items="center" top="80px">
                <div>New-Product</div>
                <FlexibleInput
                    {...register('title')}
                    placeholder="New product title"
                    border='1px #bec0c2 solid'
                    fontsize='11px'
                    color='black'
                    left='8px'
                    right='8px'
                    width="22.1%"
                    height="25px"
                    borderRadius="1px"
                />
                {errors.title && (
                    <Error top="107.5px">{`${errors.title.message}`}</Error>
                )}
                <FlexibleTextArea
                    {...register('description')}
                    placeholder="Product description"
                    width="23.3%"
                    height="95px"
                    fontSize="10px"
                />
                {errors.description && (
                    <Error top="222px" className='error'>{`${errors.description.message}`}</Error>
                )}
                <FlexibleInput
                    {...register('price')}
                    placeholder="Product price"
                    border='1px #bec0c2 solid'
                    fontsize='11px'
                    color='black'
                    left='8px'
                    right='8px'
                    width="22.1%"
                    height="25px"
                    borderRadius="1px"
                />
                {errors.price && (
                    <Error top="259.5px">{`${errors.price.message}`}</Error>
                )}
                <UploadImg />

                {errors.file && (
                    <Error top="299.5px">{`${errors.file.message}`}</Error>
                )}

                <FlexibleButton
                    type="submit"
                    backgroundColor="#2e6cd1"
                    color="white"
                    width="23.8%"
                    height="30px"
                    borderRadius="1px"
                >
                    {isSubmitting ? 'Loading...' : 'Create'}
                </FlexibleButton>
            </Row>
        </form>
    )
}

export default NewProduct