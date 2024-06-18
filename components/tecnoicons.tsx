import * as React from "react";
import type { IconSvgProps } from "@/components/others/svgtype";


export const ReactIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>React</title>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
);
export const ReactQuery: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>React Query</title>
        <path d="M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z" />
    </svg>
);
export const ReactHookForm: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>React Hook Form</title>
        <path d="M10.7754 17.3477H5.8065a.2815.2815 0 1 0 0 .563h4.9689a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9688a.2815.2815 0 1 0 0 .563h4.9688a.2815.2815 0 0 0 0-.563zm-7.3336-6.475H5.8065a.2815.2815 0 1 0 0 .563h4.9548a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9547a.2815.2815 0 1 0 0 .563h4.9547a.2815.2815 0 0 0 0-.563zm.5518-9.2001h-4.341a2.4042 2.4042 0 0 0-4.5804 0H5.3674c-1.7103 0-3.0968 1.3864-3.0968 3.0967v16.134C2.2706 22.6135 3.6571 24 5.3674 24h13.2652c1.7103 0 3.0968-1.3865 3.0968-3.0967V4.7693c0-1.7103-1.3865-3.0967-3.0968-3.0967zm-8.7046.563a.2815.2815 0 0 0 .2815-.2224 1.8411 1.8411 0 0 1 3.5979 0 .2815.2815 0 0 0 .2815.2224h1.5146v1.844a.8446.8446 0 0 1-.8446.8446H9.2552a.8446.8446 0 0 1-.8446-.8446v-1.844Zm11.2383 18.6677c0 1.3993-1.1344 2.5337-2.5337 2.5337H5.3674c-1.3993 0-2.5337-1.1344-2.5337-2.5337V4.7693c0-1.3993 1.1344-2.5337 2.5337-2.5337h2.4802v1.844c0 .7774.6302 1.4076 1.4076 1.4076h5.4896c.7774 0 1.4076-.6302 1.4076-1.4076v-1.844h2.4802c1.3993 0 2.5337 1.1344 2.5337 2.5337z" />
    </svg>
);
export const Nextjs: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>Next.js</title>
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
    </svg>
);
export const NodeIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>Node.js</title>
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
);
export const TailwindIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>Tailwind CSS</title>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
);
export const ExpressIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>Express</title>
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
);
export const MongoIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>MongoDB</title>
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
);
export const ShadcnIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>shadcn/ui</title>
        <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
    </svg>
);
export const TypescriptIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>TypeScript</title>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
);
export const SupaIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>Supabase</title>
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
    </svg>
);
export const CssIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>CSS3</title>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
);
export const AxiosIcon: React.FC<IconSvgProps> = ({
    size = 40,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >

        <path
            d="M32,10L42,42H38L34,30L30,42H26L36,10H32ZM32,18L28,30L32,30L36,18L32,18Z"
        />
    </svg>

);
export const ZustandIcon: React.FC<IconSvgProps> = ({
    size = 40,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        width={size || width}
        {...props}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800.000000 467.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,467.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M3710 4413 c-71 -25 -190 -119 -190 -150 0 -7 -4 -13 -9 -13 -4 0
   -12 -15 -18 -32 -10 -37 -7 -37 -135 -17 -116 17 -298 2 -416 -36 l-83 -26
   -46 51 c-55 61 -104 88 -166 91 -137 7 -227 -181 -184 -386 14 -68 14 -70 -8
   -100 -26 -35 -81 -143 -100 -195 -7 -21 -42 -77 -78 -126 -113 -155 -196 -346
   -236 -545 -29 -139 -31 -178 -32 -442 0 -245 16 -417 55 -582 8 -33 12 -63 8
   -66 -4 -4 -32 -15 -62 -24 -56 -18 -125 -59 -150 -90 -8 -9 -22 -39 -31 -67
   -14 -39 -16 -60 -9 -101 11 -60 18 -317 9 -317 -3 0 -14 9 -24 20 -39 43 -117
   33 -144 -19 -20 -37 45 -148 150 -256 l59 -60 2 -205 3 -205 50 -27 c119 -64
   301 -112 475 -123 58 -4 116 -9 130 -11 40 -6 330 -6 380 0 107 14 130 19 215
   48 50 16 114 41 143 54 53 24 53 24 78 5 52 -41 104 -35 239 30 79 37 85 42
   137 124 65 103 100 184 103 234 0 8 5 16 10 18 6 2 10 -36 10 -100 0 -101 0
   -103 35 -151 69 -97 188 -113 287 -40 44 33 114 167 158 304 45 140 47 144 71
   148 32 5 56 128 62 313 5 178 -7 295 -44 419 -23 75 -39 110 -91 195 -7 11
   -15 27 -19 35 -4 8 -25 34 -46 56 l-40 41 38 84 c43 97 78 138 152 181 49 28
   63 31 150 33 70 1 115 8 162 25 101 35 191 80 221 111 61 63 117 155 141 231
   18 61 26 77 38 72 30 -13 70 -16 70 -5 0 6 -12 13 -27 17 -16 3 -53 15 -83 26
   -30 11 -68 24 -85 29 -46 14 -120 73 -153 121 -16 24 -51 84 -78 133 -67 127
   -133 224 -174 257 -56 44 -161 56 -300 33 -15 -3 -4 6 25 20 28 14 71 28 98
   31 26 4 50 10 53 15 2 5 19 6 37 2 127 -23 274 -101 319 -171 83 -127 105
   -156 138 -182 44 -35 105 -62 178 -79 28 -7 56 -20 61 -29 7 -13 13 -10 30 19
   11 19 21 41 21 49 0 20 52 121 96 188 57 84 212 233 250 238 9 1 24 10 35 20
   10 9 19 14 19 10 0 -4 15 1 33 12 36 22 91 39 156 47 24 3 49 9 55 12 12 8
   178 6 241 -3 22 -2 82 -19 133 -35 220 -73 414 -258 505 -484 37 -92 49 -151
   52 -255 13 -410 -260 -746 -665 -820 -59 -11 -188 -14 -250 -6 -54 7 -179 47
   -241 77 -142 69 -277 193 -359 329 -24 41 -45 77 -45 80 -1 3 -13 43 -28 90
   -14 47 -28 103 -29 124 -2 22 -10 42 -17 44 -28 9 13 -171 65 -285 44 -97 91
   -167 167 -244 160 -166 339 -241 604 -253 114 -6 286 40 406 108 222 125 383
   355 422 601 15 95 -1 337 -24 370 -4 6 -13 30 -20 55 -39 137 -148 284 -291
   395 -211 162 -545 211 -790 116 -250 -98 -417 -265 -510 -511 -7 -19 -16 -38
   -19 -42 -5 -6 -89 17 -99 26 -1 2 -12 36 -23 76 l-20 73 22 15 c15 10 19 22
   16 40 -4 20 3 34 28 59 31 31 36 32 60 21 24 -11 29 -10 46 11 14 16 16 28 9
   40 -7 14 -2 25 21 47 l29 28 -117 118 c-65 65 -122 118 -127 118 -5 0 -17 -7
   -26 -15 -13 -11 -24 -13 -41 -7 -48 18 -98 -30 -63 -59 13 -10 10 -17 -18 -46
   -26 -27 -39 -33 -59 -29 -15 3 -35 -2 -49 -11 -17 -12 -21 -22 -16 -46 5 -23
   1 -36 -16 -55 -23 -23 -23 -24 -4 -38 38 -28 -6 -14 -48 16 -24 16 -76 38
   -116 49 -66 19 -78 19 -148 7 -82 -15 -179 -55 -208 -87 -27 -30 -7 -40 56
   -30 142 24 249 1 312 -66 l28 -29 -73 -70 c-115 -111 -110 -108 -146 -89 -18
   9 -36 13 -41 10 -5 -3 -11 -1 -15 5 -16 26 -196 5 -267 -31 -21 -11 -39 -19
   -42 -19 -2 0 5 28 16 63 14 43 21 98 24 181 4 118 4 119 31 133 63 33 103 96
   103 164 0 80 -97 136 -177 102 -18 -7 -34 -13 -37 -13 -2 0 -16 20 -30 45 -15
   25 -50 72 -78 106 l-51 62 21 61 c29 85 44 176 36 228 -18 119 -106 192 -194
   161z m96 -44 c19 -11 34 -25 34 -30 0 -6 -13 -1 -29 10 -45 32 -92 33 -151 4
   -27 -13 -50 -29 -50 -34 0 -5 -5 -9 -12 -9 -19 0 21 35 67 59 50 27 98 27 141
   0z m-58 -80 c33 -11 50 -45 56 -114 4 -40 -14 -111 -23 -97 -10 16 -114 78
   -150 90 -44 15 -51 15 -51 -3 0 -8 -5 -15 -10 -15 -29 0 47 92 110 133 31 20
   30 20 68 6z m-1040 -48 c12 -7 2 -9 -34 -4 -83 9 -139 -36 -179 -146 -11 -29
   -14 -32 -14 -12 -2 41 56 136 96 158 38 22 96 24 131 4z m487 -83 c-44 -5
   -129 -20 -189 -33 -124 -29 -119 -28 -112 -16 11 17 241 59 321 59 60 -1 60
   -1 -20 -10z m-475 -63 c8 -4 30 -24 48 -46 l34 -38 -38 -33 c-99 -86 -154
   -142 -155 -157 -1 -40 -19 36 -25 108 -8 97 -1 126 37 162 30 28 47 28 99 4z
   m83 -129 c-10 -13 -20 -22 -22 -20 -4 4 29 44 36 44 2 0 -4 -11 -14 -24z m-52
   -89 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m878 -17 c11 -7
   -6 -8 -56 -4 -186 17 -368 -95 -422 -259 -7 -21 -15 -36 -18 -33 -8 8 25 93
   54 138 42 69 136 132 243 164 49 15 171 11 199 -6z m-989 -87 c0 -19 -13 -9
   -16 12 -1 8 2 13 7 9 5 -3 9 -12 9 -21z m1488 -24 c33 -11 62 -59 62 -104 0
   -37 -27 -91 -58 -115 -33 -27 -46 -25 -59 8 -10 26 -11 26 -12 3 -1 -17 -5
   -21 -17 -17 -9 3 -17 6 -19 6 -9 0 8 57 21 71 9 10 11 19 7 22 -16 10 -35 -10
   -35 -37 0 -19 -5 -25 -19 -23 -30 5 -34 16 -12 34 14 13 18 25 13 43 -7 24 -7
   24 -17 -10 -8 -28 -12 -31 -18 -18 -12 29 35 110 75 130 41 21 47 21 88 7z
   m-1666 -31 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m2502
   -19 c-22 -24 -34 -24 -34 0 0 21 17 31 38 23 10 -3 9 -9 -4 -23z m144 -22 c29
   -28 74 -73 100 -100 l47 -47 -40 -37 c-22 -20 -60 -55 -85 -78 -25 -22 -50
   -44 -56 -48 -16 -9 -72 35 -66 53 3 9 -9 4 -31 -13 -44 -33 -69 -36 -30 -3 20
   17 25 28 17 35 -7 8 -20 4 -43 -13 l-34 -25 -32 24 c-17 14 -36 25 -41 25 -6
   0 -15 5 -22 12 -9 9 19 41 121 139 72 71 134 128 137 128 3 1 29 -23 58 -52z
   m-1574 30 c27 -19 12 -56 -30 -73 -18 -8 -37 -14 -41 -14 -10 0 16 25 28 26 5
   1 12 2 16 3 4 0 -2 8 -13 17 -10 8 -13 12 -5 8 7 -3 17 0 22 7 6 10 9 11 9 2
   0 -7 5 -13 10 -13 6 0 10 7 10 15 0 30 -104 10 -136 -27 -19 -21 -19 -21 3 -9
   19 10 22 9 16 -5 -5 -14 -3 -14 15 -3 11 7 18 17 15 23 -3 5 -1 6 5 2 18 -11
   -9 -46 -34 -46 -12 0 -27 7 -34 16 -11 13 -10 18 7 35 18 19 83 48 109 49 5 0
   18 -6 28 -13z m-1101 -62 c-3 -9 -8 -14 -10 -11 -3 3 -2 9 2 15 9 16 15 13 8
   -4z m2397 -80 c-27 -29 -43 -32 -38 -8 3 14 18 23 57 32 3 1 -6 -10 -19 -24z
   m-825 -15 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11
   -10z m-1685 -100 c-22 -153 -2 -297 62 -439 16 -35 40 -79 53 -99 13 -19 36
   -75 51 -123 17 -54 32 -89 41 -89 7 0 13 -5 13 -11 0 -5 -4 -7 -10 -4 -13 8
   -13 -1 1 -27 9 -17 13 -18 21 -7 7 10 8 8 3 -8 -6 -21 8 -52 57 -127 18 -27
   28 -34 43 -29 17 5 18 3 8 -9 -10 -12 -7 -20 19 -44 17 -16 28 -23 23 -16 -6
   11 -3 12 13 3 12 -6 19 -17 16 -24 -2 -7 10 -20 28 -29 123 -62 239 -71 326
   -26 l53 28 -3 -53 -3 -52 -70 -8 c-46 -5 -86 -4 -115 4 -198 51 -321 144 -395
   302 -12 27 -21 35 -28 28 -16 -16 17 -76 91 -170 65 -82 159 -144 247 -163 83
   -17 90 -19 98 -27 7 -7 -5 -132 -18 -176 -9 -33 -45 -205 -44 -213 6 -42 -4
   -48 -93 -57 -62 -7 -85 -1 -70 18 5 7 12 30 15 52 5 33 48 243 74 359 5 22 3
   28 -8 24 -8 -2 -15 -17 -17 -31 -2 -15 -8 -25 -13 -21 -5 3 -7 10 -4 15 4 5 2
   9 -4 9 -6 0 -15 -17 -20 -37 -15 -60 -49 -231 -61 -310 -13 -84 -10 -82 -116
   -54 -226 58 -393 227 -489 491 -30 85 -33 96 -41 165 -3 28 -8 57 -10 65 -10
   28 -2 299 9 330 3 8 5 22 5 30 -1 21 28 147 46 199 9 24 13 47 10 52 -3 5 -1
   9 4 9 5 0 15 15 22 33 34 89 177 343 187 333 1 -1 -2 -31 -7 -66z m2910 -9 c0
   -15 -28 -33 -40 -26 -7 5 -5 12 7 21 21 16 33 18 33 5z m-2356 -7 c29 -11 17
   -21 -21 -17 -34 3 -39 0 -51 -27 -8 -16 -18 -30 -23 -30 -5 0 -3 14 6 30 9 18
   11 30 5 30 -6 0 -13 -7 -16 -15 -4 -8 -10 -12 -15 -9 -12 7 -49 -55 -50 -86
   -1 -17 -3 -19 -6 -7 -8 29 17 85 48 112 30 25 85 33 123 19z m1946 -24 c0 -5
   12 -13 28 -18 l27 -10 -26 -1 c-15 -1 -35 9 -48 23 -23 24 -23 25 -2 19 11 -3
   21 -9 21 -13z m-1974 -37 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2
   -18z m79 -16 c0 -13 -7 -32 -15 -42 -14 -17 -13 -18 2 -12 13 4 16 1 13 -15
   -3 -12 -9 -26 -15 -32 -5 -5 -10 -17 -10 -25 0 -11 6 -9 21 9 16 19 18 20 10
   4 -5 -11 -16 -25 -23 -31 -19 -14 -50 -24 -43 -14 3 5 0 11 -6 13 -12 4 35
   107 55 120 6 4 7 10 3 14 -12 12 -34 -15 -62 -77 -22 -50 -25 -63 -14 -70 12
   -7 11 -9 -1 -10 -48 -4 -87 5 -105 22 -17 17 -17 19 -2 13 19 -7 24 11 5 19
   -8 3 -5 6 6 6 15 1 17 -4 12 -24 -4 -16 -2 -25 5 -25 7 0 10 3 6 6 -10 10 14
   63 27 58 7 -3 20 12 31 36 10 23 22 43 27 46 5 3 -3 -21 -18 -53 -34 -75 -39
   -93 -25 -93 6 0 11 6 11 13 0 8 14 42 31 76 26 52 29 65 18 72 -10 7 -5 8 12
   3 15 -3 30 -1 33 5 10 16 12 14 11 -12z m-160 -35 c-30 -58 -53 -84 -60 -72
   -4 6 1 17 11 25 11 7 16 17 12 21 -5 4 1 14 13 22 11 8 18 20 15 28 -3 8 0 11
   9 8 13 -5 13 -10 0 -32z m54 -2 c-12 -22 -25 -37 -30 -34 -12 7 -11 34 1 34 6
   0 10 9 10 20 0 13 7 20 20 20 19 0 19 0 -1 -40z m885 29 c-11 -18 -147 -79
   -176 -79 -44 0 -33 18 15 25 23 4 67 19 97 34 63 32 74 35 64 20z m1235 -10
   c18 -11 31 -23 28 -26 -3 -3 -16 2 -29 11 -12 9 -37 16 -56 16 -20 0 -31 4
   -27 10 10 16 48 11 84 -11z m-1992 -46 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2
   -7 2 -21 0 -30z m2133 18 c0 -5 -7 -14 -15 -21 -12 -10 -15 -10 -15 2 0 8 3
   18 7 21 9 10 23 9 23 -2z m-420 -52 c9 -15 8 -24 -1 -35 -16 -19 -4 -30 16
   -14 27 22 18 -12 -10 -39 -15 -13 -25 -34 -25 -50 1 -25 1 -25 15 -7 8 11 17
   17 20 15 8 -8 -15 -80 -24 -74 -11 6 -23 -57 -16 -77 4 -9 -37 -54 -117 -129
   -68 -62 -197 -187 -288 -276 l-165 -162 -11 42 c-17 64 -55 128 -86 146 -15 9
   -28 19 -28 22 0 3 60 61 133 129 72 68 211 198 307 289 253 241 253 241 262
   241 4 0 12 -9 18 -21z m-265 -129 c29 -11 29 -12 10 -26 -20 -15 -113 -104
   -350 -335 l-140 -137 -49 8 c-121 19 -246 -70 -246 -174 0 -22 -11 -31 -80
   -66 -96 -48 -171 -77 -262 -100 -59 -16 -67 -16 -73 -2 -7 20 4 78 26 130 21
   49 33 55 27 12 -3 -21 -1 -27 6 -20 5 5 20 10 32 10 12 0 27 7 34 14 6 8 35
   20 64 26 29 6 80 24 115 40 34 16 65 29 69 28 14 -3 42 14 36 23 -3 5 3 6 12
   2 12 -4 15 -3 10 6 -5 7 -2 10 6 9 7 -2 12 2 11 8 -1 6 4 11 10 11 20 0 112
   69 159 119 23 25 55 59 70 76 23 25 41 55 66 113 2 6 -17 -12 -43 -40 l-46
   -50 54 75 c30 41 68 102 85 135 26 52 37 64 79 83 26 12 64 26 83 31 43 13
   185 7 225 -9z m251 -408 c-9 -151 -56 -219 -233 -335 -138 -91 -149 -105 -223
   -291 -38 -96 -70 -144 -147 -216 -77 -74 -112 -97 -189 -126 -53 -20 -81 -24
   -162 -23 -53 1 -108 5 -122 9 -24 8 -24 8 -2 9 27 1 62 22 121 73 24 21 46 36
   49 34 5 -5 52 48 52 58 0 4 20 27 44 52 56 58 116 158 120 200 2 22 13 41 34
   59 17 14 38 43 47 63 11 24 46 60 98 102 81 65 284 257 426 403 l76 77 8 -27
   c5 -16 6 -70 3 -121z m-1991 -64 c-4 8 11 4 34 -10 22 -12 39 -28 37 -35 -3
   -7 1 -10 10 -6 10 4 12 0 8 -11 -7 -17 11 -23 21 -6 3 6 15 5 30 -2 14 -6 23
   -13 21 -15 -2 -3 -13 0 -25 6 -13 8 -22 8 -26 1 -8 -13 101 -64 120 -56 8 3
   17 0 21 -5 3 -6 22 -18 41 -26 28 -11 38 -11 49 -2 12 10 15 10 12 -1 -2 -10
   14 -17 56 -23 67 -9 106 -3 106 17 0 8 7 16 15 20 25 9 2 -25 -49 -72 -54 -49
   -136 -77 -203 -68 -142 19 -279 148 -389 368 l-36 73 77 -80 c43 -44 75 -74
   70 -67z m1855 139 c0 -2 -12 -14 -27 -28 l-28 -24 24 28 c23 25 31 32 31 24z
   m-595 -277 c-28 -27 -54 -50 -60 -50 -5 0 13 23 40 50 27 28 54 50 60 50 5 0
   -13 -22 -40 -50z m-1048 18 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1
   -19z m1088 -68 c-21 -22 -41 -37 -44 -35 -2 3 13 23 34 45 21 22 41 37 44 35
   2 -3 -13 -23 -34 -45z m-735 0 c-6 -11 -16 -20 -22 -20 -6 0 -3 9 7 20 10 11
   20 20 22 20 2 0 -1 -9 -7 -20z m619 -31 c17 -6 31 -15 31 -20 0 -5 -12 -4 -27
   2 -49 19 -89 12 -184 -31 -52 -23 -112 -50 -134 -59 -92 -41 -258 -92 -292
   -90 -10 0 -2 5 17 10 147 40 252 80 394 150 102 50 139 58 195 38z m147 -36
   c-21 -19 -40 -33 -42 -30 -8 8 60 75 70 70 5 -4 -8 -22 -28 -40z m-1959 5 c-3
   -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m17 -34 c3 -8 2 -12 -4 -9
   -6 3 -10 10 -10 16 0 14 7 11 14 -7z m750 0 c3 -8 2 -12 -4 -9 -6 3 -10 10
   -10 16 0 14 7 11 14 -7z m311 -4 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12
   23 12 15 0z m-230 -28 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z
   m301 -58 c-3 -8 -11 -14 -18 -13 -10 0 -10 2 0 6 6 2 13 17 13 31 1 18 3 21 6
   9 3 -10 2 -25 -1 -33z m-6 -53 c-18 -11 -148 -26 -138 -16 7 7 88 22 128 24
   19 0 21 -2 10 -8z m-1090 -62 c0 -27 88 -154 159 -228 64 -69 82 -82 100 -76
   13 4 21 2 21 -5 0 -6 -5 -8 -12 -4 -6 4 -8 3 -5 -3 14 -23 115 -65 138 -58 18
   5 20 4 9 -4 -16 -11 -21 -8 64 -37 27 -9 71 -16 97 -16 50 1 70 -11 50 -31 -8
   -8 -11 -8 -11 1 0 9 -7 8 -24 -4 -24 -15 -26 -44 -4 -44 6 0 8 6 5 13 -3 7 3
   13 13 14 10 1 21 -5 24 -13 4 -10 2 -12 -6 -8 -6 4 -17 -2 -25 -12 -14 -19
   -15 -19 -28 0 -13 18 -16 18 -40 2 -14 -9 -25 -24 -25 -32 0 -14 2 -15 17 -3
   15 12 16 12 10 -3 -3 -10 -2 -20 3 -23 6 -4 10 -2 10 3 0 6 7 12 15 16 25 9
   17 0 -32 -40 -34 -27 -41 -30 -23 -10 21 23 22 29 10 36 -28 18 -46 10 -101
   -41 -29 -28 -42 -43 -26 -34 15 10 27 13 27 7 0 -11 -31 -24 -61 -27 -26 -2
   -90 -58 -76 -67 6 -4 9 -10 5 -13 -13 -14 -45 21 -88 93 -24 43 -50 82 -57 87
   -8 6 -15 28 -17 50 -1 22 -10 56 -19 75 -9 19 -25 61 -35 93 -11 32 -22 57
   -26 57 -4 -1 -11 2 -14 6 -4 4 -1 4 6 0 7 -4 12 -1 12 8 0 25 -12 46 -23 39
   -7 -4 -8 4 -4 25 4 17 2 34 -3 37 -5 3 -7 12 -3 20 3 8 0 15 -7 15 -8 0 -11
   10 -7 30 4 16 2 32 -4 35 -5 4 -7 15 -4 25 3 11 2 28 -4 38 -11 20 -5 35 10
   26 5 -3 9 -10 9 -15z m47 -31 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1
   -19z m648 -98 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4
   16 -10z m-544 -37 c13 -16 12 -17 -3 -4 -10 7 -18 15 -18 17 0 8 8 3 21 -13z
   m520 -38 c-5 -29 -9 -35 -14 -22 -6 16 9 75 17 66 2 -2 1 -22 -3 -44z m-11
   -75 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z
   m-332 -43 c-1 -2 4 -12 12 -23 14 -18 14 -18 -2 -5 -10 7 -18 20 -18 29 0 8 3
   13 6 10 3 -4 4 -8 2 -11z m-314 -78 c7 -46 83 -279 115 -351 24 -56 29 -54
   -93 -37 -91 12 -166 44 -224 96 -37 33 -44 45 -48 88 -9 76 11 122 71 164 42
   30 146 80 166 81 4 0 9 -18 13 -41z m46 -4 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10
   15 -3 8 -1 15 4 15 6 0 10 -7 10 -15z m644 -21 c3 -8 2 -12 -4 -9 -6 3 -10 10
   -10 16 0 14 7 11 14 -7z m-54 -44 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6
   5 10 10 10 6 0 10 -4 10 -10z m1120 -11 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10
   16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m-1666 -57 c3 -5 -1 -9 -9 -9 -8 0 -15 4
   -15 9 0 4 4 8 9 8 6 0 12 -4 15 -8z m1519 -34 c31 -32 31 -33 10 -36 -29 -4
   -30 -22 -2 -22 19 0 21 -4 15 -32 -3 -17 -14 -40 -23 -50 -16 -18 -34 -24 -32
   -10 4 23 -4 24 -16 2 -14 -25 -14 -25 -15 -2 0 27 -16 29 -25 2 -8 -25 -20
   -25 -45 0 -23 23 -40 61 -40 91 0 16 5 18 27 13 21 -6 25 -4 20 9 -8 21 10 34
   53 40 l35 4 -37 1 c-22 1 -43 -4 -53 -14 -9 -9 -19 -13 -23 -9 -14 14 40 45
   80 45 31 0 46 -7 71 -32z m-1149 -11 c-2 -7 -19 -21 -37 -31 l-32 -18 34 31
   c37 34 43 37 35 18z m166 -27 c18 -12 2 -12 -25 0 -13 6 -15 9 -5 9 8 0 22 -4
   30 -9z m-516 -16 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z m316
   -19 c-7 -9 -15 -13 -19 -10 -3 3 1 10 9 15 21 14 24 12 10 -5z m1400 -15 c0
   -11 -2 -20 -4 -20 -2 0 -6 9 -9 20 -3 11 -1 20 4 20 5 0 9 -9 9 -20z m-1065 0
   c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m-991 -72 c3 -29 5
   -71 5 -93 l-1 -40 -8 40 c-14 73 -19 145 -11 145 5 0 11 -24 15 -52z m616 48
   c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m484 -21 c15 -11 16
   -15 5 -15 -8 0 -24 7 -35 15 -14 11 -15 14 -4 14 8 0 24 -6 34 -14z m-704 -5
   c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z
   m180 -4 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10
   -4z m-167 -35 c6 -23 -19 -37 -27 -15 -3 9 -1 12 4 9 6 -3 10 1 10 9 0 22 7
   20 13 -3z m167 5 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21
   13z m165 -50 l40 -21 -109 -3 c-60 -1 -111 0 -115 4 -3 3 12 21 33 39 38 32
   40 32 75 18 20 -9 54 -25 76 -37z m461 29 c10 -8 14 -15 8 -15 -5 0 -19 7 -30
   15 -10 8 -14 15 -8 15 5 0 19 -7 30 -15z m-693 -45 c-18 -17 -36 -30 -40 -30
   -8 1 58 59 67 60 3 0 -9 -14 -27 -30z m-74 -17 c-3 -21 2 -33 13 -27 7 4 8 3
   4 -4 -4 -7 -11 -12 -15 -12 -10 0 -21 37 -13 44 8 8 12 7 11 -1z m886 -31 c-6
   -7 -45 19 -45 29 0 5 11 2 24 -8 13 -10 23 -19 21 -21z m772 -14 c-3 -8 -6 -5
   -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-2189 -50 c3 -18 -30 -44 -63 -50
   -26 -4 -32 28 -9 53 21 24 67 22 72 -3z m2615 15 c-13 -2 -35 -2 -50 0 -16 2
   -5 4 22 4 28 0 40 -2 28 -4z m47 -7 c0 -8 -4 -17 -8 -20 -4 -2 -8 4 -8 15 0
   10 4 19 8 19 4 0 8 -6 8 -14z m-1170 -11 c20 -24 6 -28 -15 -5 -10 11 -13 20
   -8 20 6 0 16 -7 23 -15z m965 8 c-16 -2 -54 -8 -83 -12 -29 -5 -50 -5 -45 0 9
   9 60 16 118 16 30 0 33 -1 10 -4z m-202 -20 l-62 -4 -4 -67 -3 -67 -2 73 -2
   72 68 -2 67 -2 -62 -3z m-2080 -114 c15 -12 26 -24 24 -26 -6 -6 -177 118
   -177 128 0 8 77 -43 153 -102z m2464 -9 c-12 -53 -13 -55 -47 -56 -27 -2 -29
   -1 -7 3 32 5 42 24 53 109 6 39 10 49 11 29 2 -16 -3 -55 -10 -85z m-1087 50
   c6 -11 9 -20 7 -20 -2 0 -12 9 -22 20 -10 11 -13 20 -7 20 6 0 16 -9 22 -20z
   m590 -9 c0 -22 -27 -171 -41 -223 l-10 -38 -62 2 -62 1 60 6 60 6 21 105 c32
   157 34 148 -33 153 l-58 3 63 2 c55 2 62 0 62 -17z m-192 2 c-16 -2 -40 -2
   -55 0 -16 2 -3 4 27 4 30 0 43 -2 28 -4z m-88 -6 c-3 -3 -36 -7 -75 -10 -38
   -4 -92 -9 -120 -11 -41 -4 -38 -3 15 7 67 13 189 22 180 14z m-250 -25 c0 -10
   -79 -36 -87 -29 -2 3 15 11 39 20 24 8 44 15 46 16 1 0 2 -3 2 -7z m567 -70
   l-7 -37 43 2 42 2 -45 -8 c-25 -5 -46 -7 -48 -6 -5 4 10 85 16 85 2 0 2 -17
   -1 -38z m313 -13 c-114 -11 -159 -7 -55 5 55 7 105 9 110 6 6 -3 -19 -8 -55
   -11z m-172 -16 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m-645
   -124 c-24 -10 -123 -11 -123 -1 0 4 32 7 71 7 38 1 62 -3 52 -6z m132 6 c-23
   -8 -83 -10 -79 -3 3 4 24 8 47 7 23 0 38 -2 32 -4z m62 -1 c-3 -3 -12 -4 -19
   -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m93 1 c0 -7 -39 -12 -49 -5 -7 4 1 7 18 8
   17 0 31 -1 31 -3z"/>
            <path d="M4007 3694 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
            <path d="M5083 3665 c60 -46 73 -46 16 0 -24 19 -48 35 -53 35 -5 0 12 -16 37
   -35z"/>
            <path d="M4945 3592 c-49 -47 -72 -72 -50 -55 40 31 154 143 145 143 -3 -1
   -45 -40 -95 -88z"/>
            <path d="M2776 2233 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
            <path d="M2884 3266 c-9 -15 -14 -29 -11 -32 3 -3 13 6 23 20 9 15 14 29 11
   32 -3 3 -13 -6 -23 -20z"/>
            <path d="M4193 3113 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
            <path d="M4328 3113 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
            <path d="M4148 3103 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
            <path d="M3231 2354 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
            <path d="M2680 2630 c8 -5 20 -10 25 -10 6 0 3 5 -5 10 -8 5 -19 10 -25 10 -5
   0 -3 -5 5 -10z"/>
            <path d="M5907 3502 c-13 -19 -28 -158 -26 -234 2 -95 23 -211 46 -248 19 -32
   46 -47 103 -56 107 -17 158 103 139 329 -12 130 -26 188 -48 195 -12 4 -13
   -13 -8 -106 8 -132 -7 -277 -31 -311 -28 -39 -59 -45 -87 -17 -40 40 -57 116
   -62 281 -5 143 -12 190 -26 167z"/>
            <path d="M6375 3361 c-44 -18 -85 -93 -85 -155 0 -33 48 -107 93 -145 11 -9
   17 -29 17 -58 0 -38 -5 -50 -33 -78 -55 -55 -108 -58 -165 -10 -36 30 -42 31
   -42 4 0 -30 62 -89 97 -91 78 -4 142 24 185 82 47 64 35 151 -29 218 -45 46
   -73 95 -73 127 0 9 11 27 25 40 28 29 85 34 105 10 7 -8 16 -15 21 -15 18 0 8
   27 -19 53 -28 27 -60 33 -97 18z"/>
            <path d="M5645 3303 c-68 -5 -155 -23 -155 -32 0 -4 61 -6 136 -5 l135 3 -123
   -128 c-140 -145 -175 -197 -154 -226 13 -18 18 -18 137 -2 107 14 211 35 258
   52 11 4 11 8 0 21 -13 16 -39 15 -159 -1 -14 -2 -52 -7 -85 -11 -69 -8 -76
   -23 49 121 122 140 123 141 141 168 9 14 14 31 10 37 -6 9 -77 11 -190 3z"/>
            <path d="M5905 2803 c-40 -56 -148 -271 -176 -351 -26 -74 -10 -90 28 -29 15
   25 36 59 45 76 19 35 38 38 108 17 l45 -13 7 -123 c7 -131 19 -163 40 -114 18
   42 20 356 3 467 -20 132 -43 147 -100 70z m45 -125 c1 -29 3 -71 6 -92 5 -35
   4 -38 -12 -32 -10 4 -37 10 -60 13 -39 5 -41 7 -30 27 31 58 82 136 88 136 5
   0 8 -24 8 -52z"/>
            <path d="M6467 2803 c-4 -3 -7 -36 -7 -72 0 -36 -7 -120 -15 -186 -23 -194
   -20 -204 56 -169 48 21 84 61 115 129 44 94 28 174 -52 252 -51 49 -80 63 -97
   46z m79 -93 c31 -47 41 -113 24 -165 -12 -35 -64 -105 -79 -105 -4 0 -4 24 0
   53 4 28 8 98 8 155 1 60 5 102 11 102 5 0 22 -18 36 -40z"/>
            <path d="M5466 2780 c-59 -3 -91 -9 -94 -17 -5 -17 40 -33 92 -33 41 0 44 -2
   50 -31 3 -17 6 -68 6 -113 0 -152 42 -348 70 -331 8 5 9 75 4 236 l-7 229 71
   0 c83 0 102 6 102 31 0 40 -34 44 -294 29z"/>
            <path d="M6331 2777 c-6 -8 -12 -50 -13 -95 -1 -45 -5 -82 -9 -82 -4 0 -41 34
   -83 76 -102 101 -109 99 -118 -36 -9 -120 1 -282 18 -287 15 -5 21 34 30 175
   4 61 10 112 14 112 4 0 38 -33 76 -73 82 -86 90 -92 109 -77 21 17 22 272 1
   289 -10 8 -16 8 -25 -2z"/>
        </g>
    </svg>

);



