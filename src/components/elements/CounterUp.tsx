import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface CounterUpProps {
    count: number;
    time: number;
}
const CounterUp: React.FC<CounterUpProps> = ({ count, time }) => {
    return (
        <>
            <CountUp end={count} duration={time}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef}>count</span>
                    </VisibilitySensor>
                )}
            </CountUp>
        </>
    );
}

export default CounterUp;