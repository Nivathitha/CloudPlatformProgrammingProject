import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Content from './Content';
import LexChat from "react-lex";

const benifits = [
    {
        title: 'Boost up confidence',
        description:
            'Working out everyday gives us a fit body will is makes us healthy and also makes us look good which boost up our daily confidence.',
        image: 'https://media3.s-nbcnews.com/j/newscms/2020_31/1595313/working-out-plan-te-main-200729_6a607e3ca0cfb397c8c905c7de2d73f7.fit-760w.jpg',
        imageText: 'Image Text',
    },
    {
        title: 'Stay Healthy',
        description:
            'Eating healthy everyday builds a strong immune system. Keeps us away from most the diseases and maintain a healthy metabolism. Hence a proper diet plan will help you lead a healthy lifestyle.',
        image: 'https://www.health.harvard.edu/media/content/images/cr/0abb2b0c-c975-489f-8b47-49972e402de7.jpg',
        imageText: 'Image Text',
    },
];

const title = {
    title: 'Watch me Burn',
    description:
        "Self-Fitness application for free workout and diet plans designed just for you. Thrive not just to survive. Free and easy way to get your diet plan by giving few answers.When a diet lays down the law, it can be frustrating. Everything ends up being harder than it should be. Welcome to something different.",
    image: 'https://www.mountainone.com/sites/default/files/shutterstock_467265086_fitness.jpg',

};

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Page() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>

                <Title post={title} />

                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    How does it work?
            </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Just chat to get fit - Start a conversation with the chatbot, provide the required details, get your custom diet plan designed according to your health conditions and your food habits.
                    You can also update and track your progress using this chat bot.
            </Typography>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                    2 benifits of having a healthy life style
            </Typography>
                <Grid container spacing={4}>
                    {benifits.map((post) => (
                        <Content key={post.title} post={post} />
                    ))}
                </Grid>


                <LexChat botName="FitnessBot"
                    IdentityPoolId="us-east-1:ec9090f9-3707-4172-bd08-2f20cc8c9fb9"
                    placeholder="Let's start!"
                    style={{ position: 'absolute' }}
                    backgroundColor="#fff9c4"
                    border='double'
                    height="430px"
                    region="us-east-1"
                    headerStyle={{ backgroundColor: "#0000FF", fontSize: "30px" }}
                    headerText="Chat to get fit!" />
            </main>

            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Stay safe! Stay Healthy!
        </Typography>
            </footer>

        </React.Fragment>
    );
}