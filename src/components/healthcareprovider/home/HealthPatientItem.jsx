import styles from './HealthPatientItem.module.css'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { healthCareProviderActions } from '@/store/generalStore';

const HealthPatientItem = ({itemData}) => {
    const router = useRouter();
    const dispatch = useDispatch()

    const adherenceRouteHandler = event => {
        dispatch(healthCareProviderActions.updateSelectedPatient(itemData))
        router.push('/healthcareprovider/home/adherence-report')
    }

    console.log(itemData)

    return <section className={styles.container} onClick={adherenceRouteHandler}>
        <div className={styles.textContainer}>
            <div>
                <h4>{itemData.name}</h4>
                <p>{itemData.illness} patient</p>
            </div>
            <div className={styles.click}>click to see how {itemData.name}</div>
        </div>
        <div className={styles.go_icon}>
        &gt;
        </div>
    </section>
}

export default HealthPatientItem