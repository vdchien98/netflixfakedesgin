import { ArrowBackOutlined } from '@material-ui/icons';
import './Watch.scss';

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://netlify-movie-app-99.netlify.app/dd148d27-c538-42cb-8135-217a99fbe39b" />
        </div>
    );
}
