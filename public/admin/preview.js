(function () {
  const PURPLE = '#2d0052'
  const PINK = '#db2777'
  const PURPLE_MID = '#6b21a8'
  const PURPLE_LIGHT = '#f3e8ff'

  CMS.registerPreviewStyle(
    'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,600;0,6..12,700;1,6..12,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap',
  )

  // ─── Staff ────────────────────────────────────────────────────────────────

  function toJS(val, fallback) {
    if (val == null) return fallback
    if (typeof val.toJS === 'function') return val.toJS()
    return val
  }

  function StaffPreview({ entry }) {
    const instructors = toJS(entry.getIn(['data', 'instructors']) ?? entry.data?.instructors, [])

    return h(
      'div',
      { style: { fontFamily: 'Nunito Sans, sans-serif', padding: '24px', background: '#f9f5ff' } },
      instructors.map((instructor) =>
        h(
          'div',
          {
            key: instructor.name,
            style: {
              background: '#fff',
              border: '1px solid #e9d5ff',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '24px',
              boxShadow: '0 1px 4px rgba(45,0,82,0.06)',
            },
          },
          h(
            'div',
            { style: { background: PURPLE, padding: '16px 24px' } },
            h(
              'h2',
              {
                style: {
                  color: '#fff',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '22px',
                  margin: '0 0 4px',
                },
              },
              instructor.name,
            ),
            h(
              'p',
              {
                style: {
                  color: '#f9a8d4',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: '0 0 10px',
                },
              },
              instructor.title,
            ),
            instructor.specialties?.length > 0 &&
              h(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
                instructor.specialties.map((s) =>
                  h(
                    'span',
                    {
                      key: s,
                      style: {
                        background: 'rgba(255,255,255,0.12)',
                        color: '#ddd6fe',
                        fontSize: '12px',
                        fontWeight: '600',
                        padding: '2px 10px',
                        borderRadius: '999px',
                      },
                    },
                    s,
                  ),
                ),
              ),
          ),
          instructor.photo &&
            h('img', {
              src: instructor.photo,
              alt: instructor.name,
              style: { width: '100%', maxHeight: '240px', objectFit: 'cover', display: 'block' },
            }),
          h(
            'div',
            { style: { padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '12px' } },
            (instructor.bio ?? '')
              .split('\n\n')
              .filter(Boolean)
              .map((para, i) =>
                h('p', { key: i, style: { color: '#4b5563', fontSize: '14px', lineHeight: '1.7', margin: 0 } }, para),
              ),
          ),
        ),
      ),
    )
  }

  // ─── Classes ──────────────────────────────────────────────────────────────

  function ClassesPreview({ entry }) {
    const classes = toJS(entry.getIn(['data', 'classes']) ?? entry.data?.classes, [])

    return h(
      'div',
      { style: { fontFamily: 'Nunito Sans, sans-serif', padding: '24px', background: '#f9f5ff' } },
      classes.map((cls) =>
        h(
          'div',
          {
            key: cls.id,
            style: {
              background: '#fff',
              border: '1px solid #e9d5ff',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '20px',
              boxShadow: '0 1px 4px rgba(45,0,82,0.06)',
            },
          },
          cls.image &&
            h('img', {
              src: cls.image,
              alt: cls.title,
              style: { width: '100%', height: '180px', objectFit: 'cover', display: 'block' },
            }),
          h(
            'div',
            { style: { padding: '16px 20px' } },
            h(
              'div',
              { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } },
              h(
                'h2',
                {
                  style: {
                    color: PURPLE,
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    margin: 0,
                  },
                },
                cls.title,
              ),
              cls.featured &&
                h(
                  'span',
                  {
                    style: {
                      background: PINK,
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    },
                  },
                  'Featured',
                ),
            ),
            h(
              'div',
              { style: { display: 'flex', gap: '8px', marginBottom: '12px' } },
              h(
                'span',
                {
                  style: {
                    background: PURPLE_LIGHT,
                    color: PURPLE_MID,
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '2px 10px',
                    borderRadius: '999px',
                  },
                },
                cls.ages,
              ),
              h(
                'span',
                {
                  style: {
                    background: '#f0fdf4',
                    color: '#15803d',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '2px 10px',
                    borderRadius: '999px',
                  },
                },
                cls.price,
              ),
            ),
            h(
              'p',
              { style: { color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px' } },
              cls.description,
            ),
            cls.note &&
              h(
                'p',
                {
                  style: {
                    color: PURPLE_MID,
                    fontSize: '13px',
                    fontStyle: 'italic',
                    margin: 0,
                    padding: '8px 12px',
                    background: PURPLE_LIGHT,
                    borderRadius: '8px',
                  },
                },
                cls.note,
              ),
          ),
        ),
      ),
    )
  }

  // ─── Recital ──────────────────────────────────────────────────────────────

  function RecitalPreview({ entry }) {
    const data = toJS(entry.getIn(['data']) ?? entry.data, {})
    const { season, dateTime, venue, tickets, seniors } = data

    return h(
      'div',
      { style: { fontFamily: 'Nunito Sans, sans-serif', padding: '24px', background: '#f9f5ff' } },
      h(
        'h1',
        {
          style: {
            color: PURPLE,
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            marginBottom: '20px',
          },
        },
        `${season ?? ''} Recital`,
      ),

      h(
        'div',
        {
          style: {
            background: PURPLE,
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            color: '#fff',
          },
        },
        h(
          'p',
          { style: { margin: '0 0 8px', fontSize: '15px' } },
          h('strong', null, 'Date & Time: '),
          dateTime || 'Coming Soon',
        ),
        h(
          'p',
          { style: { margin: 0, fontSize: '15px' } },
          h('strong', null, 'Venue: '),
          venue || 'Coming Soon',
        ),
      ),

      tickets &&
        h(
          'div',
          {
            style: {
              background: '#fff',
              border: '1px solid #e9d5ff',
              borderRadius: '12px',
              padding: '16px 20px',
              marginBottom: '20px',
            },
          },
          h('h3', { style: { color: PURPLE, fontSize: '16px', margin: '0 0 12px' } }, 'Tickets'),
          h(
            'p',
            { style: { margin: '0 0 6px', fontSize: '14px', color: '#374151' } },
            h('strong', null, 'General Admission: '),
            tickets.generalAdmission || 'TBA',
          ),
          h(
            'p',
            { style: { margin: '0 0 6px', fontSize: '14px', color: '#374151' } },
            h('strong', null, 'Reserved Seating: '),
            tickets.reservedSeating || 'TBA',
          ),
          h(
            'p',
            { style: { margin: 0, fontSize: '14px', color: '#374151' } },
            h('strong', null, 'Sales Open: '),
            tickets.salesOpen || 'TBA',
          ),
        ),

      seniors?.length > 0 &&
        h(
          'div',
          null,
          h('h3', { style: { color: PURPLE, fontSize: '18px', marginBottom: '12px' } }, 'Senior Spotlight'),
          seniors.map((senior) =>
            h(
              'div',
              {
                key: senior.name,
                style: {
                  background: '#fff',
                  border: '1px solid #e9d5ff',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '12px',
                },
              },
              h(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' } },
                senior.photo &&
                  h('img', {
                    src: senior.photo,
                    alt: senior.name,
                    style: { width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' },
                  }),
                h(
                  'div',
                  null,
                  h(
                    'h4',
                    {
                      style: {
                        color: PURPLE,
                        fontSize: '16px',
                        margin: '0 0 2px',
                        fontFamily: 'Playfair Display, serif',
                      },
                    },
                    senior.name,
                  ),
                  (senior.classOf || senior.yearsAtStudio) &&
                    h(
                      'p',
                      { style: { color: PURPLE_MID, fontSize: '13px', margin: 0 } },
                      [senior.classOf && `Class of ${senior.classOf}`, senior.yearsAtStudio && `${senior.yearsAtStudio} years at Next Step`]
                        .filter(Boolean)
                        .join(' · '),
                    ),
                ),
              ),
              senior.quote &&
                h(
                  'blockquote',
                  {
                    style: {
                      borderLeft: `3px solid ${PINK}`,
                      paddingLeft: '12px',
                      margin: '0 0 8px',
                      color: '#4b5563',
                      fontSize: '14px',
                      fontStyle: 'italic',
                    },
                  },
                  `"${senior.quote}"`,
                ),
              senior.bio &&
                h('p', { style: { color: '#4b5563', fontSize: '14px', lineHeight: '1.6', margin: 0 } }, senior.bio),
            ),
          ),
        ),
    )
  }

  // ─── Recital Program ──────────────────────────────────────────────────────

  const STYLE_LABELS = {
    tap: 'Tap', jazz: 'Jazz', ballet: 'Ballet', 'hip-hop': 'Hip Hop',
    lyrical: 'Lyrical', acrobatics: 'Acrobatics', combo: 'Combo',
    'creative-movement': 'Creative Movement',
  }

  function RecitalProgramPreview({ entry }) {
    const data = toJS(entry.getIn(['data']) ?? entry.data, {})
    const { title, shows } = data

    return h(
      'div',
      { style: { fontFamily: 'Nunito Sans, sans-serif', padding: '24px', background: '#f9f5ff', minHeight: '100vh' } },

      h('h1', {
        style: { color: PURPLE, fontFamily: 'Playfair Display, serif', fontSize: '26px', marginBottom: '4px' },
      }, title || 'Recital Program'),

      !shows?.length && h('p', {
        style: { color: '#9ca3af', fontStyle: 'italic', marginTop: '24px' },
      }, 'Program coming soon — add shows to display the lineup.'),

      shows?.length > 0 && shows.map((show, si) =>
        h('div', { key: si, style: { marginTop: '28px' } },
          h('div', {
            style: {
              background: PURPLE, color: '#fff', borderRadius: '12px 12px 0 0',
              padding: '12px 20px', fontWeight: '700', fontSize: '15px',
            },
          }, show.label || `Show ${si + 1}`),

          h('div', {
            style: { background: '#fff', border: '1px solid #e9d5ff', borderTop: 'none', borderRadius: '0 0 12px 12px', overflow: 'hidden' },
          },
            (show.entries || []).map((entry, ei) => {
              if (entry.type === 'intermission') {
                return h('div', {
                  key: ei,
                  style: {
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 20px', borderTop: ei > 0 ? '1px solid #f3e8ff' : 'none',
                  },
                },
                  h('div', { style: { flex: 1, height: '1px', background: '#e9d5ff' } }),
                  h('span', { style: { color: PURPLE_MID, fontWeight: '700', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' } }, '✦ Intermission ✦'),
                  h('div', { style: { flex: 1, height: '1px', background: '#e9d5ff' } }),
                )
              }
              if (entry.type === 'section') {
                return h('div', {
                  key: ei,
                  style: {
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 20px', borderTop: ei > 0 ? '1px solid #f3e8ff' : 'none',
                  },
                },
                  h('div', { style: { flex: 1, height: '1px', background: '#e9d5ff' } }),
                  h('span', { style: { color: PURPLE, fontFamily: 'Playfair Display, serif', fontWeight: '600', fontSize: '16px' } }, entry.label),
                  h('div', { style: { flex: 1, height: '1px', background: '#e9d5ff' } }),
                )
              }
              return h('div', {
                key: ei,
                style: {
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  padding: '12px 20px', borderTop: ei > 0 ? '1px solid #f3e8ff' : 'none',
                },
              },
                h('span', {
                  style: { fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: PURPLE_MID, minWidth: '32px', textAlign: 'right', lineHeight: 1.3 },
                }, String(entry.number ?? '').padStart(2, '0')),
                h('div', { style: { flex: 1 } },
                  h('div', { style: { display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' } },
                    h('span', { style: { fontWeight: '600', color: PURPLE, fontSize: '14px' } }, entry.title),
                    entry.styleId && h('span', {
                      style: { background: PURPLE_LIGHT, color: PURPLE_MID, fontSize: '11px', fontWeight: '600', padding: '1px 8px', borderRadius: '999px' },
                    }, STYLE_LABELS[entry.styleId] || entry.styleId),
                  ),
                  h('p', { style: { color: '#6b7280', fontSize: '13px', margin: '2px 0 0' } }, entry.group),
                  entry.dancers?.length > 0 && h('p', { style: { color: '#9ca3af', fontSize: '12px', margin: '2px 0 0' } }, entry.dancers.join(', ')),
                  entry.description && h('p', { style: { color: '#9ca3af', fontSize: '12px', fontStyle: 'italic', margin: '4px 0 0' } }, entry.description),
                ),
              )
            })
          ),
        )
      ),
    )
  }

  CMS.registerPreviewTemplate('classes', ClassesPreview)
  CMS.registerPreviewTemplate('staff', StaffPreview)
  CMS.registerPreviewTemplate('recital', RecitalPreview)
  CMS.registerPreviewTemplate('recital-program', RecitalProgramPreview)
})()
