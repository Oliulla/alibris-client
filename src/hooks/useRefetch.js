import { useState } from "react";

const useRefetch = () => {
    const [isProductLoading, setIsProductLoading] = useState(true);
    return [isProductLoading, setIsProductLoading];
}

export default useRefetch;