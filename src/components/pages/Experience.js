import React from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import Title from '../common/Title'
import P from '../common/P'
import TimeLine from '../common/TimeLine'
import 'react-vertical-timeline-component/style.min.css'
import '../stylesheet/Experience.css'
import experiences from '../../utils/experiences'

function Experience() {
	return (
		<>
			<Title>Expériences</Title>
			<TimeLine id="Experience">
				<VerticalTimeline>
					{experiences.map((exp, index) => (
						<VerticalTimelineElement
							key={index}
							className={`vertical-timeline-element--${exp.type || 'work'}`}
							iconStyle={{
								background: exp.iconBackground,
								color: '#fff',
							}}
						>
							<h3 className="vertical-timeline-element-title">{exp.title}</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{exp.company} <br /> {exp.date}
							</h4>
							<P>
								{exp.description &&
									exp.description.map((item, i) => (
										<React.Fragment key={i}>
											- {item}
											<br />
										</React.Fragment>
									))}
								{exp.description && <br />}
								{exp.stack && (
									<>
										Stacks programmation : {exp.stack}
										<br />
									</>
								)}
								{exp.clients && (
									<>
										<br />
										Clients : {exp.clients}
									</>
								)}
							</P>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</TimeLine>
		</>
	)
}

export default Experience
