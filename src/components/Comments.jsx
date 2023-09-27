export const Comments = ({ comment }) => {
	const stars = [1, 2, 3, 4, 5];

	return (
		<>
			<div className="comentario_box">
				<div className="img_perfil_comentario">
					<span className="material-symbols-outlined acount">
						account_circle
					</span>
				</div>
				<div className="info_comentario">
					<h3>Anonymus M. <span style={{ color: '#A6A6A6' }}>{comment.createAt.split(' ').slice(1, 5).join(' ')}</span></h3>
					<div>
						{stars.map((index) => (
							<span key={index} className="material-symbols-outlined stars">
								grade
							</span>
						))}
					</div>
					<p>{comment.comment}</p>
					<div>
						<span style={{ marginRight: '.5rem', cursor: 'pointer' }} className="material-symbols-outlined">
							thumb_up
						</span>
						<span style={{ cursor: 'pointer' }} className="material-symbols-outlined">
							thumb_down
						</span>
					</div>
				</div>
			</div>
			<hr className="border_comentario" />
		</>
	)
}