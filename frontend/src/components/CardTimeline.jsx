import './CardTimeline.css';
import Card from 'react-bootstrap/Card';
import ButtonIconEdit from '../components/ButtonIconEdit';
import ButtonIcon from './ButtonIcon';
import axios from 'axios';

export default function CardTimeline({ date, todayGratitude, todayGratitudeId, todayDiary, todayDiaryId, onDeleteGratitude, onDeleteDiary }) {
  return (
    <section className="timelineCard-wrapper">
      <div className="date">
        <h4 className="date h8">{date}</h4>
      </div>

      {todayGratitude && (
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>My gratitude</Card.Title>
            <div className="custom-card-btns">
              <ButtonIcon
                imgSrc="../../public/delete.svg"
                // navigate={`/timeline`}
                onClick={onDeleteGratitude}
              />
              <ButtonIconEdit navigate={`edit-gratitude/${todayGratitudeId}`} />
            </div>
            <Card.Text>{todayGratitude}</Card.Text>
          </Card.Body>
        </Card>
      )}

      {todayDiary && (
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>My Moments</Card.Title>
            <div className="custom-card-btns">
              <ButtonIcon
                imgSrc="../../public/delete.svg"
                // navigate={`/timeline`}
                onClick={onDeleteDiary}
              />
              <ButtonIconEdit navigate={`edit-diary/${todayDiaryId}`} />
            </div>
            <Card.Text>{todayDiary}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </section>
  );
}
