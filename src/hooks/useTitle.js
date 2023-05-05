import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - cook's compendium`;
    }, [title])
};

export default useTitle;