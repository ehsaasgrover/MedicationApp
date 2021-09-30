import React from 'react';

type Props = {
    date: Date;
}

const WeekCalendar: React.FC<Props> = ({date}) => {
    return <View style={styles.calendarContainer}></View>;
};

const styles = StyleSheet.create({
    safe: {
        flex:1,
    },
    container: {
        flexDirection: 'row',
    },
});

export default WeekCalendar;