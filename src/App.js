import React, { useState} from 'react'
import ApiCall from './ApiCall'
import Collection1 from './components/Cards/collection_1/Collection1'
import Collection2 from './components/Cards/collection_2/Collection2'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Bann from './components/Banner/Bann'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App =()=> {
    const client_id = 'bLs87zdqr3SP0G1QZGKtJyT_xdGnj2Cj-JlFkZzRJPk';
    const [data, setData] = useState([]);
    const [page_no, setPage_no] = useState(1);
    const loadData = (colletionName, pageNum) => {
            ApiCall(pageNum, client_id, colletionName).then(res => {
                if (data.lenght === 0 || data.lenght === 'undefined') {
                    setData(res.data)
                    setPage_no(pageNum)
                } else {
                    setData(prevData => {
                        return [...prevData, ...res.data]
                    })
                    setPage_no(pageNum)
                }
            }) 
        }
   
        return (
            <Router>
                <CssBaseline />
                <Bann style={{ marginBottom: '50px' }} />

                <div >
                    <Switch>
                        <Route exact path="/">
                            <Collection1 pageNum={page_no} pics={data} loadData={loadData} />
                        </Route>
                        <Route exact path="/collection" >
                            <Collection2 pageNum={page_no} pics={data} loadData={loadData} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
export default App;
