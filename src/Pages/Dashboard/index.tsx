import React, { useState, useCallback } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  HeaderContent,
  Header,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Appointment,
  Section,
  Calendar,
} from './styles';

import logoImg from '../../assets/logoImg.svg';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/20429956_1363449150443110_712752422006271480_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhQ3HvnagzSpCnvTbqZBP_50BEW4EZgArnQERbgRmACna1AO3leQmsWmFmuK6xhsoWgHoxHS0dtd9nrCAdf8_A&_nc_ohc=p-3jwS9PrIAAX8BDEg6&_nc_ht=scontent.ffln1-1.fna&oh=9126c6d4ed93f96c6e8b4d8119e69b44&oe=5FB650FD"
                alt="Luiz Fernando"
              />

              <strong>Luiz Fernando de Morais</strong>
              <span>
                <FiClock />
                08:00h
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                09:00h
              </span>

              <div>
                <img
                  src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/20429956_1363449150443110_712752422006271480_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhQ3HvnagzSpCnvTbqZBP_50BEW4EZgArnQERbgRmACna1AO3leQmsWmFmuK6xhsoWgHoxHS0dtd9nrCAdf8_A&_nc_ohc=p-3jwS9PrIAAX8BDEg6&_nc_ht=scontent.ffln1-1.fna&oh=9126c6d4ed93f96c6e8b4d8119e69b44&oe=5FB650FD"
                  alt="Luiz"
                />

                <strong>Luiz</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                09:00h
              </span>

              <div>
                <img
                  src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/20429956_1363449150443110_712752422006271480_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhQ3HvnagzSpCnvTbqZBP_50BEW4EZgArnQERbgRmACna1AO3leQmsWmFmuK6xhsoWgHoxHS0dtd9nrCAdf8_A&_nc_ohc=p-3jwS9PrIAAX8BDEg6&_nc_ht=scontent.ffln1-1.fna&oh=9126c6d4ed93f96c6e8b4d8119e69b44&oe=5FB650FD"
                  alt="Luiz"
                />

                <strong>Luiz</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                09:00h
              </span>

              <div>
                <img
                  src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/20429956_1363449150443110_712752422006271480_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhQ3HvnagzSpCnvTbqZBP_50BEW4EZgArnQERbgRmACna1AO3leQmsWmFmuK6xhsoWgHoxHS0dtd9nrCAdf8_A&_nc_ohc=p-3jwS9PrIAAX8BDEg6&_nc_ht=scontent.ffln1-1.fna&oh=9126c6d4ed93f96c6e8b4d8119e69b44&oe=5FB650FD"
                  alt="Luiz"
                />

                <strong>Luiz</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                09:00h
              </span>

              <div>
                <img
                  src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/20429956_1363449150443110_712752422006271480_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHhQ3HvnagzSpCnvTbqZBP_50BEW4EZgArnQERbgRmACna1AO3leQmsWmFmuK6xhsoWgHoxHS0dtd9nrCAdf8_A&_nc_ohc=p-3jwS9PrIAAX8BDEg6&_nc_ht=scontent.ffln1-1.fna&oh=9126c6d4ed93f96c6e8b4d8119e69b44&oe=5FB650FD"
                  alt="Luiz"
                />

                <strong>Luiz</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
