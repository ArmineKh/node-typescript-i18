import PropTypes, {InferProps} from "prop-types";
import Link from "next/link";

// @ts-ignore
const Menu = () => {

	return (
		<>
			<ul className='flex flex-row gap-4'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
			</ul>
		</>
	)
}

export default Menu