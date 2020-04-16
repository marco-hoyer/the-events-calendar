/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import EventDateTime from './container';
import { DateTime } from '@moderntribe/events/icons';
import { date, globals } from '@moderntribe/common/utils';
import './subblocks';

/**
 * Module Code
 */

const timeZone = get( globals.tec(), 'timeZone', {} );

export default {
	id: 'event-datetime',
	title: __( 'Event Date Time', 'the-events-calendar' ),
	description: __(
		'Define the date, time, and duration for your event.',
		'the-events-calendar'
	),
	icon: <DateTime/>,
	category: 'tribe-events',
	keywords: [ 'event', 'events-gutenberg', 'tribe' ],

	supports: {
		html: false,
	},

	attributes: {
		timeZone: {
			type: 'string',
			source: 'meta',
			meta: '_EventTimezone',
		},
		separatorDate: {
			type: 'string',
			source: 'meta',
			meta: '_EventDateTimeSeparator',
		},
		separatorTime: {
			type: 'string',
			source: 'meta',
			meta: '_EventTimeRangeSeparator',
		},
		showTimeZone: {
			type: 'boolean',
			default: get( timeZone, 'showTimeZone', false ),
		},
		timeZoneLabel: {
			type: 'string',
			default: get( timeZone, 'label', date.FORMATS.TIMEZONE.string ),
		},
	},

	edit: EventDateTime,

	save( props ) {
		return null;
	},
};
