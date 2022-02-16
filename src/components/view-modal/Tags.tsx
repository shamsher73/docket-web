
import { ReactComponent as Tag } from './../../styles/assets/images/tag.svg';
import { ReactComponent as Cancel } from './../../styles/assets/images/cancel.svg';
import { ReactComponent as Add } from './../../styles/assets/images/add.svg';
import { useState } from 'react';

const Tags = ({tags,handleChange}:{tags:Array<string>,handleChange:any}):JSX.Element => {
    const [addTag, setAddTag] = useState(false);
    const [newTag, setNewTag] = useState('');

    const createTag = ():void => {
        setAddTag(true);
    }

    const createNewTag = (e:any):void => {
        setNewTag(e.target.value);
    }

    const saveTag = ():void => {
        tags = [...tags, newTag];
        handleChange(tags);
        setAddTag(false);
    }

    const removeTag = (tag:string) => {
        handleChange(tags.filter((t:string) => t !== tag));
    }
    return (
        <div className='flex p-2 border-t'>
            <Tag className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">TAGS</div>
                <div className="ml-1">
                    {
                        !addTag &&
                        <div className="flex p-2">
                        <Add className='flex-none' />
                        <label className="flex-auto pl-2 add" onClick={createTag}>Add tags</label>
                        </div>
                    }
                
                    {
                        addTag && 
                        <div className="flex p-2">
                            <input type="text" className="flex-auto" placeholder="Enter tag name" onChange={createNewTag}/>
                            <button className="button-primary p-1" onClick={saveTag}>Add</button>
                        </div>

                    }

                    {
                        tags.map((tag:string, index:number) => {
                            return (
                                    <div className="flex p-2" key={index}>
                                <input type="radio" name="subtask" value="1" className="flex-none "/>
                                <label className="flex-auto pl-2 modal-subtitle" >{tag}</label>
                                <Cancel className="right-0 "  onClick={(e) => removeTag(tag)}/>
                            </div>
                            )
                        })

                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Tags;