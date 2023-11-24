import Link from "next/link"
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {    
	return (        
		<div className="flex bg-dark-slate-gray h-20 items-center justify-around text-lg">
			<p className="text-periwinkle"><CopyrightIcon className="text-periwinkle"/> by: <Link href="https://github.com/GuilhermeBn198" className="text-indian-red">Guilherme Bernardo</Link></p>
		</div>    
	)
}
export default Footer