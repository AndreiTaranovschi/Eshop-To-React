import React from 'react';
import { useParams } from "react-router-dom";

function GrillPage() {
	console.log('useParams', useParams())
	const { catalog } = useParams()
	return (
		<div style={{height: '100%'}}>
			Grill Page {catalog}
		</div>
	);
}

export default GrillPage;
