import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import useJoinUsStyles from './join-us.styles'
import Title from '../shared/title/title.component'

export default function JoinUs () {
  const classes = useJoinUsStyles()
  const { gcms: { departments } } = useStaticQuery(graphql`
    {
      gcms {
        departments {
          name
          positions {
            title
            slug
            location
            description
            responsibilities
          }
        }
      }
    }
  `)

  console.log(departments)

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.row} ${classes.rowReverse}`}>
            <div className={classes.col2}>
              <div className={classes.section1img} />
            </div>
            <div className={classes.col2}>
              <div className={classes.section1Title}>
                <Title>Join Polygon Hermez</Title>
              </div>
              <p className={classes.paragraphMargin}>
                It’s very exciting times for us here at the Polygon Hermez
                Project. Following our successful launch and expansion plans, we
                are growing massively.
              </p>
              <p className={classes.paragraphMargin}>
                You can see our list of vacancies below. In addition, we're
                always looking for top talent, blockchain enthusiasts and if
                this sounds interesting to you, please do get in touch – we
                always try to work out how we can fit great people into our
                team.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.title}>
            <Title>Open positions</Title>
          </div>
          {departments.map((department, dIndex) => (
            <div key={department.path}>
              <div className={classes.row}>
                <div className={classes.col2}>
                  <Title>{department.name}</Title>
                </div>
                <div className={classes.col2}>
                  {department.positions.map((position, pIndex) => (
                    <div key={position.path}>
                      <div>
                        <div className={classes.subTitle}>
                          <Title type='h4'>
                            <Link
                              to={`/join-us/${position.slug}`}
                              className={classes.legalLink}
                            >
                              {position.title}
                            </Link>
                          </Title>
                        </div>
                        <p>Remote</p>
                      </div>
                      {pIndex + 1 !==
                        Object.keys(department.positions).length &&
                        (
                          <div
                            className={classes.row}
                            key={`lastPosition-${position.path}`}
                          >
                            <span className={classes.divider} />
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
              {dIndex + 1 !== Object.values(departments).length && (
                <div
                  className={classes.row}
                  key={`lastDepartment-${department.path}`}
                >
                  <span
                    className={`${classes.divider} ${classes.dividerFullWidth}`}
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </>
  )
}
